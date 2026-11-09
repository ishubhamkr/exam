import { useEffect, useMemo, useState } from "react";
import SubmitModal from "./SubmitModal.jsx";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

function formatTime(totalSeconds) {
  const total = Math.max(0, Math.floor(totalSeconds));
  const hours = String(Math.floor(total / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const seconds = String(total % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

export default function ExamScreen({
  test,
  student,
  answers,
  setAnswers,
  review,
  setReview,
  currentIndex,
  setCurrentIndex,
  timeLeft,
  onSubmit
}) {
  const [showSubmit, setShowSubmit] = useState(false);
  const question = test.questions[currentIndex];

  const stats = useMemo(() => {
    const answered = test.questions.filter((q) => answers[q.id] !== undefined).length;
    const reviewCount = test.questions.filter((q) => review[q.id]).length;
    return {
      answered,
      unanswered: test.questionCount - answered,
      review: reviewCount
    };
  }, [answers, review, test]);

  function select(optionIndex) {
    setAnswers((previous) => ({ ...previous, [question.id]: optionIndex }));
  }

  function clearAnswer() {
    setAnswers((previous) => {
      const next = { ...previous };
      delete next[question.id];
      return next;
    });
  }

  function toggleReview() {
    setReview((previous) => ({ ...previous, [question.id]: !previous[question.id] }));
  }

  function goNext() {
    setCurrentIndex((index) => Math.min(test.questionCount - 1, index + 1));
  }

  function goPrevious() {
    setCurrentIndex((index) => Math.max(0, index - 1));
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentIndex]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      const number = Number(event.key);
      if (number >= 1 && number <= question.options.length) select(number - 1);
      if (event.key.toLowerCase() === "n") goNext();
      if (event.key.toLowerCase() === "p") goPrevious();
      if (event.key.toLowerCase() === "r") toggleReview();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const progress = (stats.answered / test.questionCount) * 100;
  const timerWarning = timeLeft <= 10 * 60;

  return (
    <main className="exam-page">
      <header className="exam-topbar glass-card">
        <div className="exam-title-block">
          <div className="brand-mini">EF</div>
          <div>
            <strong>{test.shortTitle || test.title}</strong>
            <span>{student.name}{student.roll ? ` · ${student.roll}` : ""}</span>
          </div>
        </div>

        <div className="exam-progress-mini">
          <span>{stats.answered}/{test.questionCount} answered</span>
          <div className="progress-track"><div style={{ width: `${progress}%` }} /></div>
        </div>

        <div className={`timer-box ${timerWarning ? "timer-warning" : ""}`}>
          <span>TIME LEFT</span>
          <strong>{formatTime(timeLeft)}</strong>
        </div>
      </header>

      <div className="exam-layout">
        <section className="question-panel glass-card">
          <div className="question-header-row">
            <div className="question-number">Question {currentIndex + 1}</div>
            <div className="question-tags">
              <span>{question.chapter}</span>
              <span className={`tag-${String(question.difficulty).toLowerCase().replaceAll(" ", "-")}`}>{question.difficulty}</span>
              <span>{question.marks} marks</span>
            </div>
          </div>

          <div className="question-body">
            <h1>{question.question}</h1>

            <div className="option-list">
              {question.options.map((option, index) => {
                const selected = answers[question.id] === index;
                return (
                  <button
                    className={`option-button ${selected ? "selected" : ""}`}
                    key={index}
                    onClick={() => select(index)}
                  >
                    <span className="option-letter">{LETTERS[index]}</span>
                    <span className="option-copy">{option}</span>
                    <span className="option-check">{selected ? "✓" : ""}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="question-footer">
            <div className="footer-actions-left">
              <button className="secondary-button" onClick={clearAnswer}>Clear answer</button>
              <button className={`review-button ${review[question.id] ? "active" : ""}`} onClick={toggleReview}>
                {review[question.id] ? "★ Marked for review" : "☆ Mark for review"}
              </button>
            </div>

            <div className="footer-actions-right">
              <button className="secondary-button" onClick={goPrevious} disabled={currentIndex === 0}>← Previous</button>
              <button className="primary-button next-button" onClick={goNext} disabled={currentIndex === test.questionCount - 1}>Save & next →</button>
            </div>
          </div>
        </section>

        <aside className="palette-panel glass-card">
          <div className="palette-heading">
            <div>
              <div className="eyebrow">Navigator</div>
              <h2>Questions</h2>
            </div>
            <strong>{currentIndex + 1}/{test.questionCount}</strong>
          </div>

          <div className="palette-legend">
            <span><i className="legend-dot answered-dot" /> Answered</span>
            <span><i className="legend-dot review-dot" /> Review</span>
            <span><i className="legend-dot empty-dot" /> Not answered</span>
          </div>

          <div className="palette-grid">
            {test.questions.map((q, index) => {
              const answered = answers[q.id] !== undefined;
              const marked = review[q.id];
              const current = index === currentIndex;
              const classes = ["palette-button"];
              if (answered) classes.push("answered");
              if (marked) classes.push("review");
              if (current) classes.push("current");

              return (
                <button
                  className={classes.join(" ")}
                  key={q.id}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Question ${index + 1}`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          <div className="palette-stats">
            <div><span>Answered</span><strong>{stats.answered}</strong></div>
            <div><span>Remaining</span><strong>{stats.unanswered}</strong></div>
          </div>

          <button className="submit-test-button" onClick={() => setShowSubmit(true)}>Submit test</button>
          <p className="keyboard-note">Keyboard: 1–4 answer · N next · P previous · R review</p>
        </aside>
      </div>

      {showSubmit && (
        <SubmitModal
          stats={stats}
          onCancel={() => setShowSubmit(false)}
          onConfirm={() => {
            setShowSubmit(false);
            onSubmit(false);
          }}
        />
      )}
    </main>
  );
}
