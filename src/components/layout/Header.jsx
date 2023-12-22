import { useState } from "react";
import styles from "./Header.module.css";
import menu from "../../../public/assets/imgs/menu.png";
import logo from "../../../public/assets/imgs/logo.svg";
import asterisk from "../../../public/assets/imgs/asterisk.svg";

const Header = () => {
  const [activeButton, setActiveButton] = useState("ES");

  const handleButtonClick = (language) => {
    setActiveButton(language);
  };

  return (
    <div className={styles.navBar}>
      <div className={styles.header}>
        <div className={styles.headerContainer}>
          <img className={styles.logo} src={logo}></img>
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
            <button>
              <img src={menu} alt="Menu Icon" className={styles.menuIcon} />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.navBarContainer}>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
