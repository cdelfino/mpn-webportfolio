import { Link } from "react-router-dom";
import styles from "./Proyectos.module.css";

const Proyectos = () => {
  return (
    <div className={styles.projects}>
      <p className={styles.name}>PROYECTOS</p>
      <div className={styles.projectsBar}></div>
      <div className={styles.projectsContainer}>
        <div className={styles.card1}>
          <Link to="/sync" className={styles.projectLink}>
            <p className={styles.projectName}>SYNC</p>
          </Link>
        </div>
        <div className={styles.card2}>
          <Link to="/seeconds" className={styles.projectLink}>
            <p className={styles.projectName}>SEECONDS</p>
          </Link>
        </div>
        <div className={styles.card3}>
          <Link to="/bacon" className={styles.projectLink}>
            <p className={styles.projectName}>BACON</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Proyectos;
