import styles from "./Hero.module.css";
import stick from "../../../public/assets/imgs/stick.jpg";
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
              <img src={stick} alt="Palito de la n" className={styles.nImage} />
            </span>
            o que cautiva,
          </h1>
          <div className={styles.gifContainer}>
            <h1 className={styles.title2}>experiencia </h1>
            <img
              className={styles.gif}
              src="https://s3-alpha-sig.figma.com/img/d649/a153/08f3c717c41d4df3f1081cf01634cf87?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QtyI1I1bR4sPSS6MrDz4Yw8G37VlzaDW9KP0yjFRzvvAty~eRprHoA7-lIGAuZQV8JJmDOtJTISXEV7sF0ydFiGOAAMFF7hgE0Iph5hdN9YcsMTCan~5OeM~XIFckSvvrLTvJ3WPznxJq5G2h~MMjhBGIPjn9GrhzYmCg-s1BLRv0inIKr3pO0bknnp9HVWNm~saCFZy~ecZo8Vj9L6h27B7q4gDolTe0B5PuMJFLR9LNU4YOMAzJDMrea6oNQ1kIGrspq80PFWt0bu34OSei~WQbk0fM5v0YOfz6ftf~fPz4NkxfgyEXlXFKEJ1F8S611GqjzA2zdT2AQxD3bhqdw__"
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
