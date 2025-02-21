import { useState } from "react";
import { Society, Economy, Liberty, Nationalism } from "./components/index.js";
import "./App.css";
import Scoring from "./components/scoring";

function App() {
  const [answerWeight, setAnswerWeight] = useState([]);


  return (
    <div className="quiz-container">
      <Society answerWeight={answerWeight} setAnswerWeight={setAnswerWeight}/>
      <Economy answerWeight={answerWeight} setAnswerWeight={setAnswerWeight}/>
      <Liberty answerWeight={answerWeight} setAnswerWeight={setAnswerWeight}/>
      <Nationalism answerWeight={answerWeight} setAnswerWeight={setAnswerWeight}/>
      <Scoring answerWeight={answerWeight}/>
    </div>
  );
}

export default App;
