import School from "../School/School";
import styles from "./Education.module.css";
function Education() {
  return (
    <div className={styles.educationContainer}>
      <h1 className={styles.educationHeading}>Eductation</h1>
      <div className={styles.schoolContainer}>
        <School
          school="Hopkinsville Community College"
          degree="Associate of Arts"
          gpa="3.7"
          gradDate="May 2020"
        />
        <School
          school="Austin Peay State University"
          degree="B.S. in Computer Information Technology"
          gpa="4.0"
          gradDate="May 2023"
        >
          Summa Cum Laude
        </School>
      </div>
    </div>
  );
}

export default Education;
