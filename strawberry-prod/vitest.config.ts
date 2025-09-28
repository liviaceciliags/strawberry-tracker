import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    reporters: [
      "default",
      ["junit", { outputFile: "test-report.xml" }]
    ],
  },
});
