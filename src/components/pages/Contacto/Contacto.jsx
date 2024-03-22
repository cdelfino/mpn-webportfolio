import styles from "./Contacto.module.css";
import arrow from "../../../../public/assets/imgs/arrow-outward.png";
import grid1 from "../../../../public/assets/imgs/grid1.png";
import grid2 from "../../../../public/assets/imgs/grid2.png";
import grid3 from "../../../../public/assets/imgs/grid3.png";
import grid4 from "../../../../public/assets/imgs/grid4.png";
const Contacto = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactBox}>
        <div className={styles.contactBoxLeft}>
          <h1>Contacto</h1>
          <div className={styles.contactList}>
            <div className={styles.contact}>
              <img src={arrow} alt="Arrow" />
              <h2>LINKEDIN</h2>
            </div>
            <div className={styles.contactBar}></div>
            <div className={styles.contact}>
              <img src={arrow} alt="Arrow" />
              <h2>BEHANCE</h2>
            </div>
            <div className={styles.contactBar}></div>
            <div className={styles.contact}>
              <img src={arrow} alt="Arrow" />
              <h2>MAIL</h2>
            </div>
            <div className={styles.contactBar}></div>
          </div>
        </div>
        <div className={styles.contactBoxRight}>
          <div className={styles.contactGrid}>
            <img src={grid1} alt="Foto 1" />
            <img src={grid2} alt="Foto 2" />
            <img src={grid3} alt="Foto 3" />
            <img src={grid4} alt="Foto 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
