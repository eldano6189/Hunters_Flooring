import styles from "./process.module.css";

import { Button } from "../../../components/button/button";

export function Process() {
  return (
    <section className={styles.container}>
      <div className={styles.container__text}>
        <h2>From choosing to fitting.</h2>
        <p>A relaxed, honest service from start to finish.</p>
      </div>

      <div className={styles.container__grid}>
        <div className={styles.grid__item}>
          <div className={styles.item__head}>
            <p>01</p>
            <p>Phase one</p>
          </div>
          <div className={styles.item__body}>
            <p>Choose your carpet</p>
            <p>
              We bring large physical carpet samples directly to your home so
              you can assess textures, tones, and pile under your own natural
              light and decor.
            </p>
          </div>
          <div className={styles.item__foot}>
            <p>Free in-home sample visit</p>
          </div>
        </div>

        <div className={styles.grid__item}>
          <div className={styles.item__head}>
            <p>02</p>
            <p>Phase two</p>
          </div>
          <div className={styles.item__body}>
            <p>Free home measuring</p>
            <p>
              Accurate laser room survey to ensure minimum joins, exact underlay
              requirements, and transparent, all-inclusive pricing with zero
              surprises.
            </p>
          </div>
          <div className={styles.item__foot}>
            <p>Clear, fixed quotation</p>
          </div>
        </div>

        <div className={styles.grid__item}>
          <div className={styles.item__head}>
            <p>03</p>
            <p>Phase three</p>
          </div>
          <div className={styles.item__body}>
            <p>Professional carpet fitting</p>
            <p>
              Careful room preparation, high-density comfort underlays, and
              master fitting by experienced specialists who respect your home.
            </p>
          </div>
          <div className={styles.item__foot}>
            <p>Master fitter guarantee</p>
          </div>
        </div>
      </div>

      <div className={styles.container__cta}>
        <div className={styles.cta__text}>
          <p>Ready to see samples in your own home?</p>
          <p>
            We carry samples across Pembrokeshire and South Wales at a time that
            works for you.
          </p>
        </div>
        <div className={styles.cta__button}>
          <Button text={"Book free measuring"} invert />
        </div>
      </div>
    </section>
  );
}
