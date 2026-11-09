import { tests } from "../lib/testRegistry.js";

function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (!hours) return `${mins} min`;
  return mins ? `${hours}h ${mins}m` : `${hours} hours`;
}

export default function HomePage() {
  return (
    <main className="home-page">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <section className="home-hero">
        <div className="brand-mark">EF</div>
        <div className="eyebrow">Competitive practice portal</div>
        <h1>
          Train for the <span className="gradient-text">hard questions.</span>
        </h1>
        <p className="hero-copy">
          Timed, focused practice tests with negative marking, instant scoring,
          question review and detailed solutions.
        </p>
      </section>

      <section className="test-library">
        <div className="section-heading-row">
          <div>
            <div className="eyebrow">Available now</div>
            <h2>Practice tests</h2>
          </div>
          <div className="test-count">{tests.length} test{tests.length === 1 ? "" : "s"}</div>
        </div>

        <div className="test-grid">
          {tests.map((test) => (
            <article className="test-card glass-card" key={test.slug}>
              <div className="card-topline">
                <span className="subject-pill">{test.subject}</span>
                <span className="test-number">TEST {String(test.testNumber || 1).padStart(2, "0")}</span>
              </div>

              <h3>{test.shortTitle || test.title}</h3>
              <p>{test.description}</p>

              <div className="mini-stats">
                <div>
                  <strong>{test.questionCount}</strong>
                  <span>Questions</span>
                </div>
                <div>
                  <strong>{test.totalMarks}</strong>
                  <span>Marks</span>
                </div>
                <div>
                  <strong>{formatDuration(test.durationMinutes)}</strong>
                  <span>Duration</span>
                </div>
              </div>

              <a className="primary-button card-button" href={`./test/${test.slug}.html`}>
                Open test <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <span>ExamForge</span>
        <span>Practice. Review. Improve.</span>
      </footer>
    </main>
  );
}
