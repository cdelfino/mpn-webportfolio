/* eslint-disable react/prop-types */
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import styles from "./Layout.module.css";
const Layout = ({ children }) => (
  <div className={styles.layoutContainer}>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
