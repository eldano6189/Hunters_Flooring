import styles from "./home.module.css";

import { Hero } from "./hero/hero";
import { Collection } from "./collection/collection";
import { Process } from "./process/process";
import { Portfolio } from "./portfolio/portfolio";
import { Contact } from "./contact/contact";

export function Home() {
  return (
    <div className={styles.container__home}>
      <Hero />
      <Collection />
      <Process />
      <Portfolio />
      <Contact />
    </div>
  );
}
