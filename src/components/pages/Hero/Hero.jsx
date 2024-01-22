import styles from "./Hero.module.css";
import stick from "../../../../public/assets/imgs/stick.jpg";
import gifhero from "../../../../public/assets/imgs/gifhero.gif";
const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <p>DISEÑADORA UX - UI</p>
        <div className={styles.heroBar}></div>
        <div className={styles.title}>
          <h1 className={styles.title1}>
            Dise
            <span className={styles.nContainer}>
              n
              <img src={stick} alt="Palito de la enie" className={styles.nImage} />
            </span>
            o que cautiva,
          </h1>
          <div className={styles.gifContainer}>
            <h1 className={styles.title2}>experiencia </h1>
            <img
              className={styles.gif}
              src={gifhero}
              alt="Gif"
            />
          </div>
          <h1 className={styles.title3}>que inspira</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
