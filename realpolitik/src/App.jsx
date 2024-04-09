import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="quiz-container">
      <div className="society">
        <h1 className="q-header">Society</h1>
        <div className="q-wrapper">
          <p className="question"></p>
          <button className="dis-str">Strongly Disagree</button>
          <button className="dis">Disagree</button>
          <button className="neu">Neutral</button>
          <button className="agr">Agree</button>
          <button className="agr-str">Strongly Agree</button>
        </div>
      </div>
      <div className="economy">
        <h1 className="question-header">Economy</h1>
        <div className="q-wrapper">
          <p className="question"></p>
          <button className="dis-str">Strongly Disagree</button>
          <button className="dis">Disagree</button>
          <button className="neu">Neutral</button>
          <button className="agr">Agree</button>
          <button className="agr-str">Strongly Agree</button>
        </div>
      </div>
      <div className="liberty">
        <h1 className="question-header">Liberty</h1>
        <div className="q-wrapper">
          <p className="question"></p>
          <button className="dis-str">Strongly Disagree</button>
          <button className="dis">Disagree</button>
          <button className="neu">Neutral</button>
          <button className="agr">Agree</button>
          <button className="agr-str">Strongly Agree</button>
        </div>
      </div>
      <div className="nationalism">
        <h1 className="question-header">Nationalism</h1>
        <div className="q-wrapper">
          <p className="question"></p>
          <button className="dis-str">Strongly Disagree</button>
          <button className="dis">Disagree</button>
          <button className="neu">Neutral</button>
          <button className="agr">Agree</button>
          <button className="agr-str">Strongly Agree</button>
        </div>
      </div>
    </div>
  );
}

export default App;
