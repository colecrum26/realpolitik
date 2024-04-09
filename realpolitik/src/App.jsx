import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="quiz-container">
      <div className="society">
        <h2 className="q-header">Society</h2>
        <div className="q-wrapper">
          <p className="question">
            The government should play a larger role in supporting social
            welfare.
          </p>
          <div className="answer-field">
            <button className="dis-str">Strongly Disagree</button>
            <button className="dis">Disagree</button>
            <button className="neu">Neutral</button>
            <button className="agr">Agree</button>
            <button className="agr-str">Strongly Agree</button>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="continue">Continue</button>
      </div>
      <div className="economy">
        <h2 className="question-header">Economy</h2>
        <div className="q-wrapper">
          <p className="question">Regulation is good for business.</p>
          <div className="answer-field"> 
          <button className="dis-str">Strongly Disagree</button>
          <button className="dis">Disagree</button>
          <button className="neu">Neutral</button>
          <button className="agr">Agree</button>
          <button className="agr-str">Strongly Agree</button>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="continue">Continue</button>
      </div>
      <div className="liberty">
        <h2 className="question-header">Liberty</h2>
        <div className="q-wrapper">
          <p className="question"></p>
          <div className="answer-field">
          <button className="dis-str">Strongly Disagree</button>
          <button className="dis">Disagree</button>
          <button className="neu">Neutral</button>
          <button className="agr">Agree</button>
          <button className="agr-str">Strongly Agree</button>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="continue">Continue</button>
      </div>
      <div className="nationalism">
        <h2 className="question-header">Nationalism</h2>
        <div className="q-wrapper">
          <p className="question"></p>
          <div className="answer-field">
          <button className="dis-str">Strongly Disagree</button>
          <button className="dis">Disagree</button>
          <button className="neu">Neutral</button>
          <button className="agr">Agree</button>
          <button className="agr-str">Strongly Agree</button>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="get-results">See Results</button>
      </div>
      <div className="scoring">
        <p>Your Score:</p>
      </div>
    </div>
  );
}

export default App;
