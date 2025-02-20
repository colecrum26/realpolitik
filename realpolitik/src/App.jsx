import { useState } from "react";
import { Society, Economy, Liberty, Nationalism } from "./components/index.js";
import "./App.css";
import Scoring from "./components/scoring";

function App() {
  return (
    <div className="quiz-container">
      <Society />
      <Economy />
      <Liberty />
      <Nationalism />
      <Scoring />
    </div>
  );
}

export default App;
