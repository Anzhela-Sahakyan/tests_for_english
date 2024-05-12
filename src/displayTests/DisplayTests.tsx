import RenderChoiceButton from "../helpers/renderChoiceButton/RenderChoiceButton";
import vocabularyTests from "../tests/testsVocab";

// interface DisplayTestsProps {
//   tests: [];
// }

export default function DisplayTests() {
  return (
    <div>
      {vocabularyTests.map((test) =>
        test.questions.map((question, index) => (
          <div key={question.id}>
            <h3>{`${index + 1}. ${question.text}`}</h3>
            {question.choices.map((choice) => (
              <RenderChoiceButton choice={choice} key={choice.id} />
            ))}
          </div>
        ))
      )}
    </div>
  );
}
