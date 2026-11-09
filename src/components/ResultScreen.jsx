import { calculateResult, getPenalty } from "../lib/scoring.js";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

function formatScore(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

export default function ResultScreen({ test, student, answers, autoSubmitted, onRestart }) {
  const result = calculateResult(test, answers);
  const percentage = Math.max(0, result.percentage);

  return (
    <main className="result-page">
      <div className="result-hero glass-card">
        <div className="result-heading-row">
          <div>
            <a className="back-link" href="../index.html">← All tests</a>
            <div className="eyebrow">Result · {test.shortTitle || test.title}</div>
            <h1>{student.name}</h1>
            <p>{autoSubmitted ? "Time expired, so the test was submitted automatically." : "Test submitted successfully."}</p>
          </div>
          <div className="result-score-ring" style={{ "--score-progress": `${Math.min(100, percentage)}%` }}>
            <div>
              <strong>{formatScore(result.score)}</strong>
              <span>/ {test.totalMarks}</span>
            </div>
          </div>
        </div>

        <div className="result-stat-grid">
          <div className="result-stat correct-stat"><span>Correct</span><strong>{result.correct}</strong></div>
          <div className="result-stat wrong-stat"><span>Incorrect</span><strong>{result.wrong}</strong></div>
          <div className="result-stat neutral-stat"><span>Unattempted</span><strong>{result.unattempted}</strong></div>
          <div className="result-stat"><span>Accuracy</span><strong>{result.accuracy.toFixed(1)}%</strong></div>
        </div>

        <div className="mark-ledger">
          <div><span>Positive marks</span><strong>+{formatScore(result.positiveMarks)}</strong></div>
          <div><span>Negative marks</span><strong>−{formatScore(result.negativeMarks)}</strong></div>
          <div><span>Final score</span><strong>{formatScore(result.score)}</strong></div>
        </div>
      </div>

      <section className="analysis-section">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">Performance</div>
            <h2>Difficulty breakdown</h2>
          </div>
          <button className="secondary-button" onClick={() => window.print()}>Print result</button>
        </div>

        <div className="difficulty-results">
          {Object.entries(result.difficulty).map(([difficulty, data]) => (
            <article className="difficulty-result glass-card" key={difficulty}>
              <span>{difficulty}</span>
              <strong>{formatScore(data.score)} / {data.max}</strong>
              <div className="tiny-breakdown">
                <b>{data.correct} correct</b>
                <b>{data.wrong} wrong</b>
                <b>{data.unattempted} blank</b>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="review-section">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">Solutions</div>
            <h2>Question-by-question review</h2>
          </div>
          <button className="secondary-button" onClick={onRestart}>Retake test</button>
        </div>

        <div className="review-list">
          {result.details.map((item, index) => {
            const q = item.question;
            const penalty = getPenalty(q, test.negativeFraction);
            const status = !item.attempted ? "unattempted" : item.isCorrect ? "correct" : "wrong";
            return (
              <details className={`review-card ${status}`} key={q.id}>
                <summary>
                  <span className="review-number">{index + 1}</span>
                  <span className="review-question">{q.question}</span>
                  <span className="review-marks">
                    {item.isCorrect ? `+${q.marks}` : item.attempted ? `−${formatScore(penalty)}` : "0"}
                  </span>
                </summary>

                <div className="review-content">
                  <div className="answer-comparison">
                    <div>
                      <span>Your answer</span>
                      <strong>
                        {item.attempted ? `${LETTERS[item.selected]}. ${q.options[item.selected]}` : "Not attempted"}
                      </strong>
                    </div>
                    <div>
                      <span>Correct answer</span>
                      <strong>{LETTERS[q.correctAnswer]}. {q.options[q.correctAnswer]}</strong>
                    </div>
                  </div>
                  <div className="solution-box">
                    <span>Explanation</span>
                    <p>{q.explanation}</p>
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </section>
    </main>
  );
}
