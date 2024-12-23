import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    exclude: ["**/e2e/**", "**/node_modules/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["components/**/*.test.{ts,tsx}", "lib/**/*.test.ts"],
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/e2e/**", // Excludes all e2e test files
        "**/cypress/**",
        "**/coverage/**",
      ],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    alias: {
      "@/": path.resolve(__dirname, "./"),
    },
  },
});
