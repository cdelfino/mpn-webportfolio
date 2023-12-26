import { useState } from "react";
import { useSpring, animated } from "react-spring";
import styles from "./Header.module.css";
import menu from "../../../public/assets/imgs/menu.png";
import logo from "../../../public/assets/imgs/logo.svg";
import asterisk from "../../../public/assets/imgs/asterisk.svg";
import arrow from "../../../public/assets/imgs/arrow-outward.png";

const Header = () => {
  const [activeButton, setActiveButton] = useState("ES");
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  const handleButtonClick = (language) => {
    setActiveButton(language);
  };

  const menuAnimation = useSpring({
    maxHeight: isMenuClosed ? 0 : 1000,
    opacity: isMenuClosed ? 0 : 1,
    overflow: "hidden",
    config: { duration: 200 },
  });

  const handleMenuToggle = () => {
    setIsMenuClosed(!isMenuClosed);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <img className={styles.logo} src={logo} alt="Logo" />
          <div className={styles.headerToggles}>
            <div className={styles.translateButtons}>
              <button
                className={activeButton === "ES" ? styles.activeButton : ""}
                onClick={() => handleButtonClick("ES")}
              >
                ES
              </button>
              <span
                style={{
                  fontFamily: "Arial, sans-serif",
                  paddingBottom: "5px",
                }}
              >
                {" "}
                |{" "}
              </span>
              <button
                className={activeButton === "IN" ? styles.activeButton : ""}
                onClick={() => handleButtonClick("IN")}
              >
                IN
              </button>
            </div>
            <button onClick={handleMenuToggle}>
              <img src={menu} alt="Menu Icon" className={styles.menuIcon} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <animated.div
          className={`${styles.navBarContainer}`}
          style={menuAnimation}
        >
          <ul className={styles.navBarList}>
            <li className={styles.navBarListItem}>
              <img src={asterisk} alt="Asterisk" />
              <p>Sobre mi</p>
            </li>
            <li className={styles.navBarListItem}>
              <img src={asterisk} alt="Asterisk" />
              <p>Proyectos</p>
            </li>
            <li className={styles.navBarListItem}>
              <img src={asterisk} alt="Asterisk" />
              <p>Contacto</p>
            </li>
          </ul>

          <div className={styles.navBarListDetails}>
            <div className={styles.details}>
              <div className={styles.itemTitle}>
                <img src={arrow} alt="Arrow" />
                <h1>SERVICIOS</h1>
              </div>
              <h3>Consultoría UX</h3>
              <ul className={styles.list}>
                <li>
                  La consultoría UX es valiosa para las empresas que desean
                  asegurarse de que sus productos o servicios no solo sean
                  funcionales, sino que también proporcionen una experiencia
                  positiva y satisfactoria para los usuarios.
                </li>
              </ul>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Header;
