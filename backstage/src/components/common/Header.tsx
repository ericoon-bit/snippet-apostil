import IconSettings from "../icons/icon-settings"
import styles from "./styles/header.module.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className={styles.header__container}>
      <div className={styles.left__content}>
        <img className={styles.header__logo} src={logo} alt="logo" />
        <h1 className={styles.header__brand}>Roix</h1>
      </div>
      <div className={styles.right__content}>
        <IconSettings size={26} />
        <span className={styles.header__divider}></span>
        <img className={styles.header__avatar} src={logo} alt="brand" />
      </div>
    </div>
  );
};

export default Header;
