import Skills from "../../components/Skills/Skills";
import Education from "../../components/Education/Education";
import styles from "./About.module.css";
import me from "../../assets/images/me.jpg";
function About() {
  return (
    <section className={styles.about}>
      <heading className={styles.imageContainer}>
        <img
          alt="Nicolas Towery"
          aria-label="Nicolas Towery"
          src={me}
          className={styles.image}
        />
      </heading>
      <div className={styles.introduction}>
        <h1>Introduction</h1>
        <p>
          Hello, my name is Nicolas Towery! I am a front end engineer
          specializing in React.js in the Nashville TN area.
        </p>
        <p>
          Right now I am working at Bestway Ag as a Web Specialist. I get the
          opportunity to work with the latest eCommerce platforms as well as
          building websites from the ground up.
        </p>
        <p>
          I have a strong desire to learn more programming lanugages and
          concepts. When I'm not learning or writing code, I enjoy playing
          guitar!
        </p>
      </div>
      <div className={styles["skills-education"]}>
        <Skills />
        <Education />
      </div>
    </section>
  );
}

export default About;
