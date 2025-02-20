import { useState } from "react";
import { Society, Economy, Liberty, Nationalism } from "./components/index.js";
import "./App.css";

function App() {
  return (
    <div className="quiz-container">
      <Society />
      <Economy />
      <Liberty />
      <Nationalism />
      <div>
        <button className="get-results">See Results</button>
      </div>
      <div className="scoring">
        <p>Your Score:</p>
      </div>
    </div>
  );
}

export default App;
