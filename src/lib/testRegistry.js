const modules = import.meta.glob("../tests/*.js", { eager: true });

function slugFromPath(path) {
  return path.split("/").pop().replace(/\.js$/, "");
}

function normalizeTest(slug, test) {
  if (!test || !Array.isArray(test.questions)) {
    throw new Error(`Test ${slug} must export an object with a questions array.`);
  }

  const questions = test.questions.map((question, index) => ({
    ...question,
    id: question.id ?? index + 1
  }));

  return {
    ...test,
    slug,
    questions,
    totalMarks: questions.reduce((sum, question) => sum + Number(question.marks || 0), 0),
    questionCount: questions.length
  };
}

export const tests = Object.entries(modules)
  .map(([path, module]) => normalizeTest(slugFromPath(path), module.default))
  .sort((a, b) => {
    if (a.subject !== b.subject) return String(a.subject).localeCompare(String(b.subject));
    if (a.className !== b.className) return String(a.className).localeCompare(String(b.className));
    return Number(a.testNumber || 0) - Number(b.testNumber || 0);
  });

export const testsBySlug = Object.fromEntries(tests.map((test) => [test.slug, test]));

export function getCurrentTestSlug(pathname = window.location.pathname) {
  const match = pathname.match(/\/test\/([^/]+)\.html$/i);
  return match ? decodeURIComponent(match[1]) : null;
}
