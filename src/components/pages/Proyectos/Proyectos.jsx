import styles from "./Proyectos.module.css";

export const Proyectos = () => {
  return (
    <div className={styles.projects}>
      <p className={styles.name}>PROYECTOS</p>
      <div className={styles.projectsBar}></div>
      <div className={styles.projectsContainer}>
        <div className={styles.card1}>
          <p className={styles.projectName}>SYNC</p>
        </div>
        <div className={styles.card2}>
          <p className={styles.projectName}>SEECONDS</p>
        </div>
        <div className={styles.card3}>
          <p className={styles.projectName}>BACON</p>
        </div>
      </div>
    </div>
  );
};
