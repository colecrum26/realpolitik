export default function Nationalism() {
  return (
    <div className="quiz-container">
      <div className="liberty">
        <h2 className="q-header">Nationalism</h2>
        <div className="q-wrapper">
          <p className="question">
            Globalization is inevitable, so it doesn't matter how I feel about
            my country.
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
        <button className="get-results">See Results</button>
      </div>
    </div>
  );
}
