import styles from "./testType.module.css";

interface TestTypeProps {
  name: string;
  description: string;
}

const TestType: React.FC<TestTypeProps> = ({ name, description }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
export default TestType;
