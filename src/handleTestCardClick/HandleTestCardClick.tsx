import React, { useState } from "react";
import DisplayVocabularyTestsNumbers from "../displayTestsNumbers/DisplayVocabularyTestsNumbers";
import DisplayTestTypes from "../displayTestTypes/DisplayTestTypes";

export default function HandleTestCardClick() {
  const [showTestTypes, setShowTestTypes] = useState(true);

  const handleTestTypeClick = () => {
    setShowTestTypes(false);
  };
  const handleGoBack = () => {
    setShowTestTypes(true);
  };
  return (
    <div>
      {showTestTypes ? (
        <DisplayTestTypes onTestTypeClick={handleTestTypeClick} />
      ) : (
        <DisplayVocabularyTestsNumbers onGoBack={handleGoBack} />
      )}
    </div>
  );
}
