import BackButton from "../buttons/backButton/BackButton";
import TestNumberBtn from "../helpers/testNumberBtn/TestNumberBtn";
import vocabularyTests from "../tests/testsVocab";

type DisplayVocabularyTestsNumbersProps = {
  onGoBack: () => void;
};

export default function DisplayVocabularyTestsNumbers({
  onGoBack,
}: DisplayVocabularyTestsNumbersProps) {
  const label = vocabularyTests.map((test) => test.name);
  return (
    <div>
      {label.map((label) => (
        <TestNumberBtn label={label} />
      ))}
      <BackButton handleGoBackClick={onGoBack} />
    </div>
  );
}
