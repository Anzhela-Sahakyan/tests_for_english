import styles from "./renderChoiceButton.module.css";

interface Choice {
  id: string;
  text: string;
}

const RenderChoiceButton = ({ choice }: { choice: Choice }) => {
  return <button className={styles.optiopBtn}>{choice.text}</button>;
};
export default RenderChoiceButton;
