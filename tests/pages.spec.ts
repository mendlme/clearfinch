import { test, expect } from "@playwright/test";
import { BASE_PATH } from "../playwright.config";

const B = BASE_PATH;

const PAGES = [
  B || "/",
  `${B}/services`,
  `${B}/services/trading-applications`,
  `${B}/services/project-management`,
  `${B}/services/data-management`,
  `${B}/services/ai-consulting`,
  `${B}/services/transformations`,
  `${B}/about`,
  `${B}/partners`,
  `${B}/contact`,
  `${B}/impressum`,
  `${B}/privacy`,
  `${B}/terms`,
];

for (const path of PAGES) {
  test(`${path} loads without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    const response = await page.goto(path);
    expect(response?.status(), `${path} returned non-200`).toBeLessThan(400);
    await expect(page.locator("h1")).toBeVisible();
    expect(errors, `Console errors on ${path}`).toHaveLength(0);
  });

  test(`${path} contains no em-dashes`, async ({ page }) => {
    await page.goto(path);
    const bodyText = await page.locator("body").innerText();
    expect(bodyText, `Em-dash found on ${path}`).not.toContain("—");
  });
}
