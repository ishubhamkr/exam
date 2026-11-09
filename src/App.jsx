import { useEffect } from "react";
import HomePage from "./components/HomePage.jsx";
import ExamApp from "./components/ExamApp.jsx";
import { getCurrentTestSlug, testsBySlug } from "./lib/testRegistry.js";

export default function App() {
  const slug = getCurrentTestSlug();
  const test = slug ? testsBySlug[slug] : null;

  useEffect(() => {
    if (test) document.title = `${test.shortTitle || test.title} | ExamForge`;
    else if (slug) document.title = "Test not found | ExamForge";
    else document.title = "ExamForge | Practice Tests";
  }, [slug, test]);

  if (slug && !test) {
    return (
      <main className="center-page">
        <section className="glass-card not-found-card">
          <div className="eyebrow">404 · Test not found</div>
          <h1>No test exists for “{slug}”.</h1>
          <p>
            Check the filename inside <code>src/tests</code>, then run the build again.
          </p>
          <a className="primary-button inline-button" href="../index.html">
            Back to all tests
          </a>
        </section>
      </main>
    );
  }

  return test ? <ExamApp test={test} /> : <HomePage />;
}
