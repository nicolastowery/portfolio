import projects from "../../data/projects";
import styles from "./Projects.module.css";
import Project from "../../components/Project/Project";
function Projects() {
  return (
    <main className={styles.pageContainer}>
      <h1 className={styles.projectsContainerHeader}>Projects</h1>
      <section className={styles.projectsContainer}>
        {projects.map((p, i) => (
          <Project project={p} key={p.id} delay={i + 1} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
