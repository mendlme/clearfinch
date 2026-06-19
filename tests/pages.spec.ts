import { test, expect } from "@playwright/test";

const PAGES = [
  "/clearfintest",
  "/clearfintest/services",
  "/clearfintest/services/trading-applications",
  "/clearfintest/services/project-management",
  "/clearfintest/services/data-management",
  "/clearfintest/services/ai-consulting",
  "/clearfintest/services/transformations",
  "/clearfintest/about",
  "/clearfintest/partners",
  "/clearfintest/contact",
  "/clearfintest/impressum",
  "/clearfintest/privacy",
  "/clearfintest/terms",
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
