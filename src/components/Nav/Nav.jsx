import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";
import resume from "../../assets/documents/resume.pdf";
function Nav() {
  return (
    <nav>
      <ul className={styles.links}>
        <li className={styles.linkContainer}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.linkContainer}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.linkContainer}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={styles.linkContainer}>
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
