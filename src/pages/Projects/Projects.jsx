import projects from "../../data/projects";
import styles from "./Projects.module.css";
import Project from "../../components/Project/Project";
function Projects() {
  return (
    <main className={styles.pageContainer}>
      <h1>Projects</h1>
      <section className={styles.projectsContainer}>
        {projects.map((p) => (
          <Project project={p} key={p.id} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
