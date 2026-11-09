import { useMemo, useState } from "react";

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins ? `${hours} h ${mins} min` : `${hours} hours`;
}

export default function StartScreen({ test, onStart }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [error, setError] = useState("");

  const groups = useMemo(() => {
    const result = {};
    for (const q of test.questions) {
      const key = q.difficulty || "Questions";
      if (!result[key]) result[key] = { count: 0, marks: 0 };
      result[key].count += 1;
      result[key].marks += q.marks;
    }
    return result;
  }, [test.questions]);

  function submit(event) {
    event.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) {
      setError("Enter the student's name to begin.");
      return;
    }
    onStart({ name: cleanName, roll: roll.trim() });
  }

  return (
    <main className="start-page">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <section className="start-card glass-card">
        <div className="start-banner">
          <div>
            <a className="back-link" href="../index.html">← All tests</a>
            <div className="eyebrow">{test.subject} · {test.className}</div>
            <h1>{test.title}</h1>
            <p>{test.description}</p>
          </div>
          <div className="exam-badge">
            <span>TEST</span>
            <strong>{String(test.testNumber || 1).padStart(2, "0")}</strong>
          </div>
        </div>

        <div className="exam-overview-grid">
          <div className="overview-item"><span>Questions</span><strong>{test.questionCount}</strong></div>
          <div className="overview-item"><span>Total marks</span><strong>{test.totalMarks}</strong></div>
          <div className="overview-item"><span>Duration</span><strong>{formatDuration(test.durationMinutes)}</strong></div>
          <div className="overview-item"><span>Wrong answer</span><strong>−¼ marks</strong></div>
        </div>

        <div className="difficulty-strip">
          {Object.entries(groups).map(([label, info]) => (
            <div className={`difficulty-box difficulty-${label.toLowerCase().replaceAll(" ", "-")}`} key={label}>
              <span>{label}</span>
              <strong>{info.count} × {info.count ? info.marks / info.count : 0} marks</strong>
              <small>{info.marks} marks total</small>
            </div>
          ))}
        </div>

        <div className="start-grid">
          <div className="instruction-panel">
            <div className="eyebrow">Before you start</div>
            <h2>Exam instructions</h2>
            <ol>
              {test.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>

          <form className="student-form" onSubmit={submit}>
            <div className="eyebrow">Candidate</div>
            <h2>Enter student details</h2>

            <label>
              Student name <span>*</span>
              <input
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  setError("");
                }}
                placeholder="e.g. Aarav Sharma"
                autoComplete="name"
                autoFocus
              />
            </label>

            <label>
              Roll / ID <small>optional</small>
              <input
                value={roll}
                onChange={(event) => setRoll(event.target.value)}
                placeholder="e.g. IX-A-17"
              />
            </label>

            {error && <div className="form-error">{error}</div>}

            <button className="primary-button start-button" type="submit">
              Start 3-hour test <span aria-hidden="true">→</span>
            </button>
            <p className="form-note">The timer starts only after you press Start.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
