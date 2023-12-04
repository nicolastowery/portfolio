import bestwayMockup from "../assets/images/bestway-mockup.png";
import betterPhotos from "../assets/images/better-photos.png";
import socialEditor from "../assets/images/social-editor.png";
import portfolio from "../assets/images/portfolio.png";
import fastReactPizza from "../assets/images/fast-react-pizza.png";
import theWildOasis from "../assets/images/the-wild-oasis.png";

const projects = [
  {
    id: 1,
    title: "SocialEditor",
    description: "HTML5, CSS3",
    repoLink: "https://github.com/nicolastowery/social-editor",
    liveLink: "https://nicolastowery.github.io/social-editor",
    category: "personal",
    image: socialEditor,
  },
  {
    id: 2,
    title: "BetterPhotos",
    description: "HTML5, CSS3, SASS",
    repoLink: "https://github.com/nicolastowery/better-photos",
    liveLink: "https://nicolastowery.github.io/better-photos",
    category: "personal",
    image: betterPhotos,
  },
  {
    id: 3,
    title: "Portfolio",
    description: "HTML5, CSS3, JavaScript, React",
    repoLink: "https://github.com/nicolastowery/better-photos",
    liveLink: "https://nicolastowery.github.io/better-photos",
    category: "personal",
    image: portfolio,
  },
  {
    id: 4,
    title: "Bestway Mockup",
    description: "HTML5, CSS3, SASS",
    repoLink: "https://github.com/nicolastowery/bestway-site-mockup",
    liveLink: "https://nicolastowery.github.io/bestway-site-mockup",
    category: "work",
    image: bestwayMockup,
  },
  {
    id: 5,
    title: "Bestway Drone Portal",
    description: "HTML5, CSS3, JavaScript, React, Node.js, PostgreSQL",
    repoLink: "#",
    liveLink: "#",
    category: "work",
  },
  {
    id: 6,
    title: "Fast React Pizza",
    description:
      "HTML5, CSS3, JavaScript, React, Redux, React Router, Tailwind",
    repoLink: "https://github.com/nicolastowery/fast-react-pizza",
    liveLink: "https://fast-react-pizza-towery.vercel.app/",
    category: "personal",
    image: fastReactPizza,
  },
  {
    id: 7,
    title: "The Wild Oasis",
    description: "React, React Query, React Router, Styled Components",
    repoLink: "https://github.com/nicolastowery/the-wild-oasis",
    liveLink: "https://the-wild-oasis-towery.vercel.app",
    category: "personal",
    image: theWildOasis,
  },
];

export default projects;
