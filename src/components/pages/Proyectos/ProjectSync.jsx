/* eslint-disable react/jsx-no-target-blank */
import arrow from "../../../../public/assets/imgs/arrow-outward.png";
import styles from "./ProjectsDisplay.module.css";
import sync1 from "../../../../public/assets/imgs/sync1.png";
import sync2 from "../../../../public/assets/imgs/sync2.png";
import Marquee from "react-fast-marquee";
import Gracias from "../../common/Marquees/Gracias";
import seeconds1 from "../../../../public/assets/imgs/seeconds1.png";
import next from "../../../../public/assets/imgs/next.png";
import { Link } from "react-router-dom";
import behance from "../../../../public/assets/imgs/behance.png";
const ProjectSync = () => {
  return (
    <div className={styles.sync}>
      <div className={styles.headBar}></div>
      <div className={styles.projectPicInfo}>
        <div className={styles.projectInfoBox}>
          <div className={styles.projectInfo}>
            <h1>SYNC CASE STUDY</h1>
            <p>
              Rediseño de plataforma que automatiza y agiliza todo el trabajo
              operativo que involucra a las áreas administrativas y de recursos
              humanos.
            </p>
          </div>
          <div>
            <div className={styles.projectInfoBar}></div>
            <div className={styles.title}>
              <img className={styles.arrow} src={arrow} alt="Arrow" />
              <p>CHALLENGE</p>
            </div>
            <p>
              Elevar la calidad de la experiencia de usuario y reducir las
              fuentes de frustración.
              <br />
              <br />
              Para alcanzar este propósito, hemos desarrollado un plan de acción
              que implica la reestructuración completa de esta plataforma como
              solución integral. Hacerlo intuitivo, mejorar la navegación,
              generar mayor consistencia entre los diferentes componentes.
            </p>
          </div>
        </div>
        <img className={styles.projectPic1} src={sync1} alt="SYNC" />
      </div>

      <div>
        <div>
          <h2>SOLUCIÓN</h2>
          <p>
            Crear un sistema de diseño el cual genere mayor consistencia en la
            plataforma, sumando un sistema de grillas para ordenar todos los
            elementos de la plataforma aprovechando los espacios. Mejorar el
            writing a lo largo de los flujos de navegación.
          </p>
        </div>
        <div>
          <h2>PROCESO</h2>
          <p>
            Entrevista - Benchmarking - Armado de user persona - Creación de
            userflow - Diseño de wireframes - Creación de un sistema de diseño -
            Pruebas de usabilidad.
          </p>
        </div>
        <div>
          <img className={styles.projectPic2} src={sync2} alt="SYNC" />
          <div>
            <div className={styles.projectsBar}></div>
            <h2>
              <img className={styles.arrow} src={arrow} alt="Arrow"></img>DESIGN
              SYSTEM
            </h2>
            <p>
              La creación del sistema de diseño nos ayudó a que el producto sea
              escalable, consistente e intuitivo.
            </p>
            <a
              className={styles.behanceLink}
              href="https://www.behance.net/gallery/181899983/Sync-Case-Study"
              target="_blank"
            >
              <img src={behance} alt="Behance" />
              ver el proyecto completo
            </a>
          </div>
        </div>
      </div>
      <Marquee autoFill="true">
        <Gracias />
      </Marquee>
      <div>
        <div>
          <h1>Próximo</h1>
          <ul>
            <li>
              <h3 className={styles.projectTitle}>SEECONDS</h3>
            </li>
            <li className={styles.projectCharge}>UX | UI DESIGNER</li>
            <li className={styles.projectYear}>2022</li>
          </ul>
          <div className={styles.projectsBar}></div>
          <ul className={styles.projectDetail}>
            <li>
              <h3>BANCON</h3>
            </li>
            <li>UX | UI DESIGNER</li>
            <li>2021</li>
          </ul>
        </div>
        <div>
          <img src={seeconds1} alt="Seeconds" />
        </div>
        <div>
          <Link to="/seeconds">
            <img src={next} alt="Next" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSync;
