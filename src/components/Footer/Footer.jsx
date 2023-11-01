import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.empty}></div>
      <ul className={styles.links}>
        <li className={styles.linkContainer}>
          <a
            className={styles.link}
            href="https://github.com/nicolastowery/"
            aria-label="My GitHub Account"
            alt="GitHub"
          >
            <AiFillGithub />
          </a>
        </li>
        <li className={styles.linkContainer}>
          <a
            className={styles.link}
            href="mailto: dev.towery@gmail.com"
            aria-label="Email me!"
            alt="Email me!"
          >
            <GrMail />
          </a>
        </li>
        <li className={styles.linkContainer}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/nicolas-towery-933538279/"
            aria-label="View my LinkedIn"
            alt="View my LinkedIn"
          >
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
      <div className={styles.attribution}>
        Designed and Coded by Nicolas Towery
      </div>
    </footer>
  );
}

export default Footer;
