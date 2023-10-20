import styles from "./School.module.css";

function School({ school, degree, gpa, gradDate, children }) {
  return (
    <div className={styles.schoolContainer}>
      <h2 className={styles.degree}>{degree}</h2>
      <ul className={styles.degreeItems}>
        <li className={styles.degreeItemContainer}>
          <div className={styles.school}>{school}</div>
        </li>
        <li className={styles.degreeItemContainer}>
          <div className={styles.gpa}>{gpa} GPA</div>
        </li>
        <li className={styles.degreeItemContainer}>
          <div className={styles.gradDate}>Graduated {gradDate}</div>
        </li>
        {children && (
          <li className={styles.degreeItemContainer}>
            <div className={styles.children}>{children}</div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default School;
