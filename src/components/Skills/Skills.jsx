import skills from "../../data/skills";
import styles from "./Skills.module.css";
function Skills() {
  return (
    <div className={styles.skillsContainer}>
      <h1>Skills</h1>
      <div className={styles.skillContainer}>
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`${styles.skill} ${styles[skill.type]}`}
          >
            <div>{skill.skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
