import "./App.css";
import DisplayTestTypes from "./displayTestTypes/DisplayTestTypes";
import DisplayTests from "./displayTests/DisplayTests";
import DisplayVocabularyTestsNumbers from "./displayTestsNumbers/DisplayVocabularyTestsNumbers";
import HandleTestCardClick from "./handleTestCardClick/HandleTestCardClick";
import RenderChoiceButton from "./helpers/renderChoiceButton/RenderChoiceButton";
import SubmitBtn from "./buttons/submitBtn/SubmitBtn";
function App() {
  return (
    <div className="App">
      <h1 className="header">TESTS</h1>
      <div>
        {/* <DisplayTestTypes /> */}
        {/* <DisplayVocabularyTestsNumbers /> */}
        {/* <DisplayTests /> */}
        {/* <RenderChoiceButton /> */}
        {/* <DisplayTests /> */}
        {/* <SubmitBtn /> */}
        <HandleTestCardClick />
      </div>
    </div>
  );
}

export default App;
