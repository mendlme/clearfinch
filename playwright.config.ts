import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.PORT || "3001";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/clearfintest";

export { BASE_PATH };

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "node .next/standalone/server.js",
    url: `http://127.0.0.1:${PORT}${BASE_PATH || "/"}`,
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
    env: {
      PORT,
      HOSTNAME: "127.0.0.1",
      SMTP_HOST: process.env.SMTP_HOST ?? "",
      SMTP_PORT: process.env.SMTP_PORT ?? "465",
      SMTP_SECURE: process.env.SMTP_SECURE ?? "true",
      SMTP_USER: process.env.SMTP_USER ?? "",
      SMTP_PASS: process.env.SMTP_PASS ?? "",
      SMTP_FROM: process.env.SMTP_FROM ?? "",
      CONTACT_TO: process.env.CONTACT_TO ?? "",
    },
  },
});
