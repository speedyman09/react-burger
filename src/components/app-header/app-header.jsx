import Menu from "./menu/menu";
import styles from "./styles.module.css";

function AppHeader() {
  return (
    <header className={`${styles.header}`}>
      <Menu />
    </header>
  );
}

export default AppHeader;
