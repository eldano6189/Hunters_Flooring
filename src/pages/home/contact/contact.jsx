import styles from "./contact.module.css";

export function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Submited");
  };

  return (
    <section className={styles.container}>
      <div className={styles.container__text}>
        <h2>Lets find the perfect carpet for your home.</h2>
        <p>
          Whether you're refreshing one room or transforming your whole home,
          we're here to help you find a carpet you'll love. Get in touch for
          friendly advice and a free in-home measure.
        </p>
        <div className={styles.container__promise}>
          <h3>The hunters promise</h3>
          <p>
            Honest, zero-pressure advice. We bring samples to you anywhere
            across Pembrokeshire, Carmarthenshire & South Wales.
          </p>
        </div>
        <div className={styles.container__contact}>
          <p>PREFER TO TALK RIGHT AWAY?</p>
          <a href="tel:441437123456">01437 123 456</a>
          <p>01437 123 456 · Haverfordwest & Pembrokeshire (Mon – Sat)</p>
        </div>
      </div>

      <div className={styles.container__form}></div>
    </section>
  );
}
