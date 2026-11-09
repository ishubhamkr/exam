import { useCallback, useEffect, useState } from "react";
import StartScreen from "./StartScreen.jsx";
import ExamScreen from "./ExamScreen.jsx";
import ResultScreen from "./ResultScreen.jsx";

export default function ExamApp({ test }) {
  const [phase, setPhase] = useState("start");
  const [student, setStudent] = useState({ name: "", roll: "" });
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(test.durationMinutes * 60);
  const [autoSubmitted, setAutoSubmitted] = useState(false);

  const submit = useCallback((automatic = false) => {
    setAutoSubmitted(automatic);
    setPhase("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (phase !== "exam") return undefined;

    const timer = window.setInterval(() => {
      setTimeLeft((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === "exam" && timeLeft === 0) submit(true);
  }, [phase, timeLeft, submit]);

  useEffect(() => {
    function warnBeforeLeaving(event) {
      if (phase !== "exam") return;
      event.preventDefault();
      event.returnValue = "";
    }

    window.addEventListener("beforeunload", warnBeforeLeaving);
    return () => window.removeEventListener("beforeunload", warnBeforeLeaving);
  }, [phase]);

  function start(candidate) {
    setStudent(candidate);
    setAnswers({});
    setReview({});
    setCurrentIndex(0);
    setTimeLeft(test.durationMinutes * 60);
    setAutoSubmitted(false);
    setPhase("exam");
  }

  function restart() {
    setAnswers({});
    setReview({});
    setCurrentIndex(0);
    setTimeLeft(test.durationMinutes * 60);
    setAutoSubmitted(false);
    setPhase("start");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (phase === "start") return <StartScreen test={test} onStart={start} />;

  if (phase === "result") {
    return (
      <ResultScreen
        test={test}
        student={student}
        answers={answers}
        autoSubmitted={autoSubmitted}
        onRestart={restart}
      />
    );
  }

  return (
    <ExamScreen
      test={test}
      student={student}
      answers={answers}
      setAnswers={setAnswers}
      review={review}
      setReview={setReview}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      timeLeft={timeLeft}
      onSubmit={submit}
    />
  );
}
