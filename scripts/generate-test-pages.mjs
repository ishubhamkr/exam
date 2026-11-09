import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const testsDir = path.join(root, "src", "tests");
const outputDir = path.join(root, "test");

await fs.mkdir(outputDir, { recursive: true });

// Remove only generated HTML files so deleted tests do not leave stale pages.
for (const file of await fs.readdir(outputDir)) {
  if (file.endsWith(".html")) {
    await fs.rm(path.join(outputDir, file));
  }
}

const files = (await fs.readdir(testsDir))
  .filter((file) => file.endsWith(".js"))
  .sort();

for (const file of files) {
  const slug = file.replace(/\.js$/, "");
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#07111f" />
    <meta name="robots" content="noindex" />
    <title>${slug} | ExamForge</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="../src/main.jsx"></script>
  </body>
</html>
`;

  await fs.writeFile(path.join(outputDir, `${slug}.html`), html, "utf8");
}

console.log(`Generated ${files.length} test page(s):`);
for (const file of files) {
  console.log(`  test/${file.replace(/\.js$/, ".html")}`);
}
