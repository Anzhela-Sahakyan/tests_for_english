import styles from "./testNumberBtn.module.css";
interface TestNumberProps {
  label: string;
}

export default function TestNumberBtn({ label }: TestNumberProps) {
  return (
    <div className={styles.btnContainer}>
      <button className={styles.testNumberBtn}>{label}</button>
    </div>
  );
}
