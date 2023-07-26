import { useState } from "react";
import Project from "./Project";

const content = {
  home: `
    <h1>Hello, my name is Nicolas Towery. I am a Front End Engineer!</h1>
    <img
      src='https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/319740360_537868071346289_8912813488132857334_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1mlfECbzKfQAX_m04H_&_nc_ht=scontent-ord5-2.xx&oh=00_AfBKBHFqlZl6qEirwQBvLjHRnMFCDLkIsgjvZaWtlgktRg&oe=64C5C6BD'
      alt='Nicolas Towery'
    />
  `,
};
function TabContent({ title }) {
  const [activeProject, setActiveProject] = useState(null);

  const handleActiveProject = (title) => {
    if (title === activeProject) return setActiveProject(null);
    setActiveProject(title);
  };
  return (
    <div className="tab__content">
      {title === "Home" && (
        <>
          <h1>Hello, my name is Nicolas Towery. I am a Front End Engineer!</h1>
          <img
            src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/319740360_537868071346289_8912813488132857334_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1mlfECbzKfQAX_m04H_&_nc_ht=scontent-ord5-2.xx&oh=00_AfBKBHFqlZl6qEirwQBvLjHRnMFCDLkIsgjvZaWtlgktRg&oe=64C5C6BD"
            alt="Nicolas Towery"
          />
        </>
      )}
      {title === "About" && (
        <>
          <div>
            Hi, my name is Nicolas Towery! I am an aspiring front end engineer
            specializing in React.js! I graduated Summa Cum Laude from Austin
            Peay State University in 2023 with a Bachelors in Computer
            Information Technology with a concentration in Web and Database.
          </div>
        </>
      )}
      {title === "Projects and Work" && (
        <ul>
          <Project
            title="Sellswords and Spellcrafts"
            tech={["Node / Express", "React", "PostgreSQL", "Socket.IO"]}
            source={"https://github.com/Luke-Schnetlage/S-S_3.0"}
            skills={[
              "Collaborating with a team",
              "React and React Router",
              "Web Sockets",
              "Fetching data using an API",
            ]}
            onActiveProject={handleActiveProject}
            activeProject={activeProject}
          >
            Admittedly rough around the edges, Sellswords and Spellcrafts (S&S)
            was my first ever experiece with React as well as collaborating with
            other programmers! S&S was a group senior capstone project with
            fellow programmers{" "}
            <a href="https://github.com/Luke-Schnetlage">Luke Schnetlage</a> and{" "}
            <a href="https://github.com/MasEvans83199">Mason Evans</a>. We had
            set out to create a real time 1v1 card game that users could play in
            their browser. Due to time constraints and the set backs that come
            with being a novice programmer, it never saw its fullest potential.
            However, the finished prototype allowed users to connect to one
            another, select one of the three pre made card decks, and take turns
            placing cards on the game board with functionality such as being
            unable to play while it is the opponents turn, being unable to place
            a card within your opponents circle, functional random card draws on
            each turn, and the ability to see how many cards the opponent has in
            their hand!
          </Project>
          <Project
            title="Bestway Ag"
            tech={["Magento 1", "React", "BigCommerce", "Python"]}
            skills={[
              "Working with CSVs",
              "Developing microsites",
              "Migrating data between eCommerce platforms",
            ]}
            onActiveProject={handleActiveProject}
            activeProject={activeProject}
          >
            I am currently employed at Bestway Ag as a Web Specialist. Here I
            help manage our <a href="https://www.bestwayag.com">B2B site</a>,
            our <a href="https://www.sprayersupplies.com">B2C site,</a> and our{" "}
            <a href="https://www.bestwaydrones.com">drone site</a>. On top of
            this, I am currently building a micro site for our drone customers
            to view resources and place help requests using React and Express!
            Other than this, I have built a web scraper using Python that takes
            all of our B2C products and scrapes competitor webites, placing all
            the data within a CSV file.
          </Project>
          <Project
            title="Udemy Courses"
            tech={["HTML", "CSS", "SASS", "Javascript", "React", "Redux"]}
            skills={[
              "Responsive modern web design",
              "Fetching data using an API",
              "Modern Javascript conventions",
              "Custom React hooks",
              "In-depth knowledge of the most used React hooks",
            ]}
            onActiveProject={handleActiveProject}
            activeProject={activeProject}
          >
            Post graduation, I figured it beneficial to enroll in a couple of
            Udemy courses to sharpen my CSS and Vanilla JavaScript skills. Upon
            completing these courses, I realized how much there was still to
            learn with React so opted to enroll in a React course as well. These
            courses tackled each technology by having the student develop
            professional grade projects.
          </Project>
          <Project
            title="Portfolio"
            tech={["React"]}
            skills={["Conditional Rendering"]}
            source={"https://github.com/nicolastowery/portfolio"}
            onActiveProject={handleActiveProject}
            activeProject={activeProject}
          >
            My portfolio serves as a one-stop-shop for all of my projects and my
            contact info! I figured building my portfolio using React would be a
            great way to gain more experience as well as prove to employers my
            skills with React. It is still in it's earliest stages, but soon it
            will be complete with beautiful styling and modern responsive
            design!
          </Project>
        </ul>
      )}
      {title === "Contact" && (
        <ul>
          <li>Email: nicolastowery@gmail.com</li>
          <li>Phone: (270) 881-2503</li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/nicolastowery">/nicolastowery</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default TabContent;
