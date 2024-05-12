import styles from "./submitButton.module.css";

export default function SubmitBtn(handleSubmit: any) {
  return (
    <button className={styles.submitBtn} onClick={handleSubmit}>
      Submit Test
    </button>
  );
}
