import { Link } from "react-router-dom";
import resume from "../assets/documents/resume.pdf";
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a
            href={resume}
            rel="noreferrer"
            target="_blank"
            title="View my Resume"
            aria-label="View my Resume"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
