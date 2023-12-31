import TypingAnimation from "../../components/TypingAnimation/TypingAnimation";
import styles from "./Home.module.css";
function Home() {
  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.name}>Nicolas Towery</h1>
      <div className={styles.title}>Front End Engineer</div>
      <TypingAnimation />
    </main>
  );
}

export default Home;
