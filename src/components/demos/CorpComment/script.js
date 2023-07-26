// -- GLOBAL --
const MAX_CHARS = 150;
const BASE_API_URL = 'https://bytegrad.com/course-assets/js/1/api';

const textareaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');
const formEl = document.querySelector('.form');
const feedbackListEl = document.querySelector('.feedbacks');
const submitBtnEl = document.querySelector('.submit-btn');
const spinnerEl = document.querySelector('.spinner');
const hashtagListEl = document.querySelector('.hashtags');


const renderFeedbackItem = feedbackItem => {
    //new feedback item HTML
    const feedbackItemHTML = `
    <li class="feedback">
        <button class="upvote">
            <i class="fa-solid fa-caret-up upvote__icon"></i>
            <span class="upvote__count">${feedbackItem.upvoteCount}</span>
        </button>
        <section class="feedback__badge">
            <p class="feedback__letter">${feedbackItem.badgeLetter}</p>
        </section>
        <div class="feedback__content">
            <p class="feedback__company">${feedbackItem.company}</p>
            <p class="feedback__text">${feedbackItem.text}</p>
        </div>
        <p class="feedback__date">${feedbackItem.daysAgo === 0 ? 'NEW' : `${feedbackItem.daysAgo}d`}</p>
    </li> 
    `; //template literal

    //insert new feedback item into list
    feedbackListEl.insertAdjacentHTML('beforeend', feedbackItemHTML);
};


// -- COUNTER COMPENENT --
(() => {
    const inputHandler = () => {
        //determine maximum number of characters
        const maxNrChars = MAX_CHARS;
    
        //dertmine number of characters that the user has currently typed
        const nrCharsTyped = textareaEl.value.length;
    
        //calculate number of characters left (maximum - currently typed)
        const charsLeft = maxNrChars - nrCharsTyped;
    
        //show number of characters left
        counterEl.textContent = charsLeft;
    };
    
    textareaEl.addEventListener('input', inputHandler);
})();


// -- FORM COMPONENT --
(() => {
    const showVisualIndicator = textCheck => {
        const className = textCheck === 'valid' ? 'form--valid' : 'form--invalid';
    
        //show valid indicator
        formEl.classList.add(className);
    
        //remove visual indicator
        setTimeout(() => {
            formEl.classList.remove(className);
        }, 2000);
    };
    
    const submitHandler = event => {
        //prevent default browser action (form action causes refresh)
        event.preventDefault();
        
        //get text from textarea
        const text = textareaEl.value;
        
        //validate text (check for hashtag and text length)
        if(text.includes('#') && text.length >= 5) {
            showVisualIndicator('valid');
        } else {
            showVisualIndicator('invalid');
    
            //focus textarea
            textareaEl.focus();
    
            //stop this function execution
            return;
        }
    
        //we have text, now extract other info from the text the user has submitted
        const hashtag = text.split(' ').find(word => word.includes('#'));
        const company = hashtag.substring(1)
        const badgeLetter = company.substring(0, 1).toUpperCase();
        const upvoteCount = 0;
        const daysAgo = 0;
    
        // render feedback item list
        const feedbackItem = {
          upvoteCount,
          company,
          badgeLetter,
          daysAgo,
          text,  
        };
        renderFeedbackItem(feedbackItem);
    
        // send feedback item to server
        fetch(`${BASE_API_URL}/feedbacks`, {
            method: 'POST', // default method is GET
            body: JSON.stringify(feedbackItem), // item to be submitted to the server, converted to JSON
            headers: {
                Accept: 'application/json', // default accept is everything, now we only accept JSON in response to this POST
                'Content-Type': 'application/json' // content-type for sending JSON to server | in quotes b/c of '-' | Content-Type = what we are sending to server
            }
        }).then(res => {
            if (!res.ok) {
                console.log('Error! Something went wrong!');
                return; // stop the function
            }
    
            console.log('Successfully submitted');
        }).catch(error => console.log(error));
    
        //clear textare
        textareaEl.value = '';
    
        //blur submit button
        submitBtnEl.blur();
        
        //reset counter
        counterEl.textContent = MAX_CHARS;
    };
    
    formEl.addEventListener('submit', submitHandler);
})();


// -- FEEDBACK LIST COMPONENT --
(() => {
    const clickHandler = event => {
        // get clicked HTML element
        const clickedEl = event.target;
    
        // determine if user intended to upvote or expand
        const upvoteIntention = clickedEl.className.includes('upvote');
    
        //run the appropriate logic
        if(upvoteIntention) {
            // get the closest upvote button
            const upvoteBtnEl = clickedEl.closest('.upvote');
    
            // disable button from being pressed again
            upvoteBtnEl.disabled = true;
    
            // select the upvote count element within the upvote button
            const upvoteCountEl = upvoteBtnEl.querySelector('.upvote__count');
            
            // get currently displayed upvote count
            let upvoteCount = +upvoteCountEl.textContent; // + sign converts textContent to a number
    
            // set upvoteCountEl, increment by 1
            upvoteCountEl.textContent = ++upvoteCount;
        } else {
            // expand the clicked feedback item
            clickedEl.closest('.feedback').classList.toggle('feedback--expand'); // closest gives li closest to the actually clicked element
        }
    };
    
    feedbackListEl.addEventListener('click', clickHandler); // handles click of individual feedback items. Placed on its parent. When the click occurs on the li, it will bubble to the ol.
    
    fetch(`${BASE_API_URL}/feedbacks`)
        .then(response => response.json()) // triggers when first byte of data is received
        .then(data => { // triggers when all of data has been received
            //remove spinner
            spinnerEl.remove();
    
            //iterate over each element in feedbacks array and render it in list
            data.feedbacks.forEach(feedbackItem => renderFeedbackItem(feedbackItem));
        })
        .catch(error => {
            feedbackListEl.textContent = `Failed to fetch feedback items. Error Message: ${error.message}`;
        });
})();

    
// -- HASHTAG LIST COMPONENT --
(() => {
    const clickHandler = event => {
        // get clicked element
        const clickedEl = event.target;

        // stop function if click happened in list, but outside button
        if (clickedEl.className === 'hashtags') return;

        // extract the company name from the button that we clicked
        const companyNameFromHashtag = clickedEl.textContent.substring(1).toLowerCase().trim();

        // iterate over each feedback item in the list
        feedbackListEl.childNodes.forEach(childNode => { // the lsit contains child nodes. The childNodes is an array that we can iterate over
            //stop this iteration if it is a text node (not an li)
            if (childNode.nodeType === 3) return;

            //extract the company name from the li
            const companyNameFromFeedbackItem = childNode.querySelector('.feedback__company').textContent.toLowerCase().trim();

            // remove feedback item from list if company names are not equal
            if (companyNameFromHashtag !== companyNameFromFeedbackItem) {
                childNode.remove()
            } 
        });
    };

    hashtagListEl.addEventListener('click', clickHandler);
})(); // immediately invoke the funciton



