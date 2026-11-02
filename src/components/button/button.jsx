import styles from "./button.module.css";

export function Button({ text, invert }) {
  return (
    <button className={`${styles.button} ${invert && styles.invert}`}>
      <p>{text}</p>
    </button>
  );
}
