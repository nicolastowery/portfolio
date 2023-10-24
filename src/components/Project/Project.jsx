import styles from "./Project.module.css";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
function Project({ project }) {
  const { title, description, repoLink, liveLink, category, image } = project;
  console.log(image);
  return (
    <div
      className={styles.background}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.links}>
          {repoLink && (
            <a href={repoLink} className={styles.link}>
              <AiFillGithub />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} className={styles.link}>
              <AiOutlineLink />
            </a>
          )}
        </p>
      </div>
    </div>
  );
}

export default Project;
