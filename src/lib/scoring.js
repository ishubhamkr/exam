export function getPenalty(question, negativeFraction) {
  return Number(question.marks) * Number(negativeFraction || 0);
}

export function calculateResult(test, answers) {
  let score = 0;
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;
  let positiveMarks = 0;
  let negativeMarks = 0;

  const details = test.questions.map((question) => {
    const selected = answers[question.id];
    const attempted = selected !== undefined && selected !== null;
    const isCorrect = attempted && selected === question.correctAnswer;
    const penalty = getPenalty(question, test.negativeFraction);
    let marksAwarded = 0;

    if (!attempted) {
      unattempted += 1;
    } else if (isCorrect) {
      correct += 1;
      marksAwarded = Number(question.marks);
      positiveMarks += marksAwarded;
      score += marksAwarded;
    } else {
      wrong += 1;
      marksAwarded = -penalty;
      negativeMarks += penalty;
      score -= penalty;
    }

    return {
      question,
      selected,
      attempted,
      isCorrect,
      marksAwarded
    };
  });

  const attempted = correct + wrong;
  const accuracy = attempted ? (correct / attempted) * 100 : 0;
  const percentage = test.totalMarks ? (score / test.totalMarks) * 100 : 0;

  const difficulty = {};
  for (const item of details) {
    const key = item.question.difficulty || "Other";
    if (!difficulty[key]) {
      difficulty[key] = { score: 0, max: 0, correct: 0, wrong: 0, unattempted: 0 };
    }

    difficulty[key].max += Number(item.question.marks);
    difficulty[key].score += item.marksAwarded;
    if (!item.attempted) difficulty[key].unattempted += 1;
    else if (item.isCorrect) difficulty[key].correct += 1;
    else difficulty[key].wrong += 1;
  }

  return {
    score,
    correct,
    wrong,
    unattempted,
    attempted,
    accuracy,
    percentage,
    positiveMarks,
    negativeMarks,
    difficulty,
    details
  };
}
