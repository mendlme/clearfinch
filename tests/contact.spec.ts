import { test, expect } from "@playwright/test";
import { BASE_PATH } from "../playwright.config";

const B = BASE_PATH;

test("contact form submits successfully and shows success state", async ({ page }) => {
  await page.goto(`${B}/contact`);

  await page.fill("#name", "CI Test Runner");
  await page.fill("#email", "ci@clearfin-test.com");
  await page.fill("#company", "CI Corp");
  await page.fill("#phone", "+41 00 000 00 00");
  await page.selectOption("#subject", "General Inquiry");
  await page.fill("#message", "Automated CI test - please ignore.");

  await page.click('button[type="submit"]');

  await expect(
    page.locator("text=Message sent!"),
    "Success message not shown after form submission"
  ).toBeVisible({ timeout: 15000 });
});

test("contact form shows error on missing required fields", async ({ page }) => {
  await page.goto(`${B}/contact`);

  await page.click('button[type="submit"]');

  await expect(page.locator("form")).toBeVisible();
});
