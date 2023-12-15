import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [activeButton, setActiveButton] = useState("ES");

  const handleButtonClick = (language) => {
    setActiveButton(language);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>MPN</h1>
        <div className={styles.headerToggles}>
          <div className={styles.translateButtons}>
            <button
              className={activeButton === "ES" ? styles.activeButton : ""}
              onClick={() => handleButtonClick("ES")}
            >
              ES
            </button>
            <span
              style={{ fontFamily: "Arial, sans-serif", paddingBottom: "5px" }}
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
          <h1>X</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
