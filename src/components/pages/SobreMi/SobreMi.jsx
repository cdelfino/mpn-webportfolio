import styles from "./SobreMi.module.css";
import arrow from "../../../../public/assets/imgs/arrow-outward.png";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
const SobreMi = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuClosed(!isMenuClosed);
  };
  const menuAnimation = useSpring({
    maxHeight: isMenuClosed ? 0 : 1000,
    opacity: isMenuClosed ? 0 : 1,
    overflow: "hidden",
    config: { duration: 200 },
  });

  return (
    <div className={styles.aboutMe}>
      <p className={styles.name}>SOBRE MI</p>
      <div className={styles.aboutMeBar}></div>

      <div className={styles.aboutMeInfo}>
        <h1>
          ¡Hola<span className={styles.exclMark}>¡</span> Soy Paz,
        </h1>
        <h3>
          Diseñadora UX/UI, me apasiona crear experiencias digitales únicas.
          Siempre pensando en el usuario como principal protagonista lo cual me
          motiva a enfrentar nuevos desafíos con creatividad y empatía. Además,
          de diseñadora, comparto mis conocimientos a través de la docencia. Me
          encanta dar clases y guiar a estudiantes en el mundo del diseño.
          ¡Bienvenidos!
        </h3>
        <div style={{ width: "100%" }}>
          <div className={styles.servicesBar}></div>
          <div className={styles.servicios}>
            <img src={arrow} alt="Arrow" />
            <p onClick={handleMenuToggle}>SERVICIOS</p>
            {isMenuClosed ? null : (
              <animated.div
                className={styles.menuContent}
                style={menuAnimation}
              >
                <div className={styles.menuContent}>
                  <h4>Consultoría UX</h4>
                  <p>
                    La consultoría UX es una valiosa herramienta para las
                    empresas que desean asegurarse de que sus productos y/o
                    servicios no sean solo funcionales sino también proporcionen
                    una experiencia altamente positiva y satisfactoria para los
                    usuarios.
                  </p>
                </div>
              </animated.div>
            )}
          </div>
          <div className={styles.servicesBar}></div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
