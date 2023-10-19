import styles from "./School.module.css";

function School({ school, degree, gpa, gradDate, children }) {
  return (
    <div className={styles.schoolContainer}>
      <h2 className={styles.degree}>{degree}</h2>
      <div className={styles.school}>{school}</div>
      <div className={styles.gpa}>{gpa} GPA</div>
      <div className={styles.gradDate}>Graduated {gradDate}</div>
      {children && <div className={styles.children}>{children}</div>}
    </div>
  );
}

export default School;
