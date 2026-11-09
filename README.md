# ExamForge - React Exam Website

A Vite + React static exam engine designed for GitHub Pages.

## What you edit for a new test

Only add a new file inside:

```text
src/tests/
```

For example:

```text
src/tests/physics9-2.js
```

On the next `npm run build`, the project automatically generates:

```text
test/physics9-2.html
```

and Vite publishes it as:

```text
dist/test/physics9-2.html
```

The home page also discovers the new test automatically. You do not edit routes or a registry.

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The output is in `dist/`.

## GitHub Pages

1. Push this project to GitHub.
2. Open **Settings -> Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`.

The included workflow builds and deploys the `dist` folder.

## Test file format

Each test file must `export default` one object containing metadata and a `questions` array. The filename is the URL slug.

Required question fields:

```js
{
  chapter: "Motion",
  difficulty: "Easy",
  marks: 2,
  question: "Question text",
  options: ["A", "B", "C", "D"],
  correctAnswer: 1,
  explanation: "Why option B is correct."
}
```

`correctAnswer` is zero-based: `0 = A`, `1 = B`, `2 = C`, `3 = D`.

## Negative marking

Set this in each test:

```js
negativeFraction: 0.25
```

A wrong 2-mark question deducts 0.5, a wrong 4-mark question deducts 1, and a wrong 5-mark question deducts 1.25.

## Note about answer security

This is a fully static website, so correct answers are shipped to the browser and can be discovered by someone deliberately inspecting the JavaScript. It is ideal for practice/mock tests, but not secure enough for a high-stakes proctored examination without a backend.
