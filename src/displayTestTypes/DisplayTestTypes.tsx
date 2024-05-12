import TestType from "../testType/TestType";
import testTypesData from "../data/testTypesData";
import styles from "./displayTestTypes.module.css";

type DisplayTestTypesProps = {
  onTestTypeClick: () => void;
};

export default function DisplayTestTypes({
  onTestTypeClick,
}: DisplayTestTypesProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {testTypesData.map((item) => (
          <div key={item.id} onClick={onTestTypeClick}>
            <TestType name={item.name} description={item.description} />
          </div>
        ))}
      </div>
    </div>
  );
}
