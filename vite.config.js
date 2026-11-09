import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getHtmlInputs() {
  const inputs = {
    index: path.resolve(__dirname, "index.html")
  };

  const testDir = path.resolve(__dirname, "test");

  if (fs.existsSync(testDir)) {
    for (const file of fs.readdirSync(testDir)) {
      if (!file.endsWith(".html")) continue;
      const name = `test-${file.replace(/\.html$/, "")}`;
      inputs[name] = path.resolve(testDir, file);
    }
  }

  return inputs;
}

export default defineConfig({
  plugins: [react()],

  // Relative asset URLs make the same build work for:
  // username.github.io/repository-name/
  // a custom domain
  // localhost / preview
  base: "./",

  build: {
    rolldownOptions: {
      input: getHtmlInputs()
    }
  }
});
