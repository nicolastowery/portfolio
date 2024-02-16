import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import styles from "./About.module.css";
import me from "../../assets/images/me.jpg";
function About() {
  return (
    <main className={styles.about}>
      <heading className={styles.imageContainer}>
        <img
          alt="Nicolas Towery"
          aria-label="Nicolas Towery"
          src={me}
          className={styles.image}
        />
      </heading>
      <div className={styles.introduction}>
        <h1 className={styles.introductionHeader}>Introduction</h1>
        <div className={styles.paragraphs}>
          <p>
            Hello, my name is Nicolas Towery! I am a front end engineer
            specializing in React.js in the Nashville TN area.
          </p>
          <p>
            I have a strong desire to learn more programming languages and
            concepts. I am currently learning Next.js. Outside of web
            technologies, I am wanting to eventually learn React Native, Machine
            Learning, and Assembly!
          </p>
        </div>
      </div>
      <div className={styles["skills-education"]}>
        <Skills />
        <Education />
      </div>
    </main>
  );
}

export default About;
