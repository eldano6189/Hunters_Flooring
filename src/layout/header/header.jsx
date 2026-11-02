import styles from "./header.module.css";

import { Logo } from "../../assets/svg-components/logo";
import { Button } from "../../components/button/button";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container__brand}>
        <div className={styles.brand__logo}>
          <Logo />
        </div>
        <div className={styles.brand__text}>
          <p>Hunters</p>
          <p>Flooring</p>
        </div>
      </div>
      <div className={styles.container__quote}>
        <Button text={"Get a free quote"} />
      </div>
    </header>
  );
}
