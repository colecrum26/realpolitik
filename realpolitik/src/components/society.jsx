export default function Society() {
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
        <div className="q-wrapper">
          <p className="question">
            Access to affordable housing and healthcare is a right.
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
    </div>
  );
}
