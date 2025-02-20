export default function Liberty() {
  return (
    <div className="quiz-container">
      <div className="liberty">
        <h2 className="question-header">Liberty</h2>
        <div className="q-wrapper">
          <p className="question">Everyone should be allowed to own a gun.</p>
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
    </div>
  );
}
