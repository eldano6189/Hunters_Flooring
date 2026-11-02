import { Button } from "../../../components/button/button";
import { BackgroundVideo } from "../../../components/background-video/backgroundVideo";
import { useRef } from "react";
import styles from "./hero.module.css";

export function Hero() {
  const secondSectionRef = useRef(null);
  return (
    <>
      <BackgroundVideo targetRef={secondSectionRef} />
      <section className={styles.container}>
        <div className={styles.container__content}>
          <h1>
            Every room starts from <span>the ground up.</span>
          </h1>
          <p>
            From cosy bedrooms to welcoming living rooms, the right carpet
            transforms the way your home looks, feels, and lives.
          </p>
          <Button text={"Get a free quote"} />
        </div>
      </section>

      <section className={styles.container} ref={secondSectionRef}>
        <div className={styles.container__content}>
          <h1>Comfort you can feel.</h1>
          <p>
            Soft underfoot. Beautiful to look at. Made for the moments that make
            a house a home.
          </p>
          <Button text={"Get a free quote"} />
        </div>
      </section>
    </>
  );
}
