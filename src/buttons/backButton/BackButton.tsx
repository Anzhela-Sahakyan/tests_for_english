import styles from "./backButton.module.css";

type BackButtonProps = {
  handleGoBackClick: () => void;
};

export default function BackButton({ handleGoBackClick }: BackButtonProps) {
  return (
    <button onClick={handleGoBackClick} className={styles.backBtn}>
      Go Back
    </button>
  );
}
