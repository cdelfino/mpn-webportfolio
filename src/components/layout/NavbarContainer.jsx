/* eslint-disable react/prop-types */
import { animated } from "react-spring";
import styles from "./Header.module.css";
import asterisk from "../../../public/assets/imgs/asterisk.svg";
import arrow from "../../../public/assets/imgs/arrow-outward.png";

const NavbarContainer = ({ menuAnimation, handleItemHover, hoveredItem }) => {
  return (
    <animated.div className={`${styles.navBarContainer}`} style={menuAnimation}>
      <ul className={styles.navBarList}>
        <li
          className={styles.navBarListItem}
          onMouseEnter={() => handleItemHover("sobremi")}
        >
          <img src={asterisk} alt="Asterisk" />
          <p>Sobre mi</p>
        </li>
        <li
          className={styles.navBarListItem}
          onMouseEnter={() => handleItemHover("proyectos")}
        >
          <img src={asterisk} alt="Asterisk" />
          <p>Proyectos</p>
        </li>
        <li
          className={styles.navBarListItem}
          onMouseEnter={() => handleItemHover("contacto")}
        >
          <img src={asterisk} alt="Asterisk" />
          <p>Contacto</p>
        </li>
      </ul>

      <div className={styles.navBarListDetails}>
        {hoveredItem === "sobremi" && (
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
        )}
        {hoveredItem === "proyectos" && (
          <div className={styles.details}>
            <div className={styles.itemTitle}>
              <img src={arrow} alt="Arrow" />
              <h1>PROYECTOS</h1>
            </div>
            <ul className={styles.projectDetail}>
              <li>
                <h3 className={styles.projectTitle}>SYNC Case Study</h3>
              </li>
              <li className={styles.projectCharge}>UX | UI DESIGNER</li>
              <li className={styles.projectYear}>2023</li>
            </ul>
            <div className={styles.projectsBar}></div>
            <ul className={styles.projectDetail}>
              <li>
                <h3>BANCON</h3>
              </li>
              <li>UX | UI DESIGNER</li>
              <li>2021</li>
            </ul>
            <div className={styles.projectsBar}></div>
            <ul className={styles.projectDetail}>
              <li>
                <h3>SEECONDS</h3>
              </li>
              <li>UX | UI DESIGNER</li>
              <li>2022</li>
            </ul>
          </div>
        )}
        {hoveredItem === "contacto" && (
          <div className={styles.details}>
            <div className={styles.itemTitle}>
              <img src={arrow} alt="Arrow" />
              <h1>CONTACTO</h1>
            </div>

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
            </div>
          </div>
        )}
      </div>
    </animated.div>
  );
};
export default NavbarContainer;
