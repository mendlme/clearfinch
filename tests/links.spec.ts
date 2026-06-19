import { test, expect } from "@playwright/test";
import { BASE_PATH } from "../playwright.config";

const B = BASE_PATH;

const PAGES = [
  B || "/",
  `${B}/services`,
  `${B}/about`,
  `${B}/partners`,
  `${B}/contact`,
];

for (const path of PAGES) {
  test(`${path} has no broken internal links`, async ({ page, request }) => {
    await page.goto(path);

    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((els) =>
        els.map((el) => el.getAttribute("href")).filter(Boolean)
      );

    const prefix = B || "/";
    const port = process.env.PORT || "3001";
    const unique = [...new Set(hrefs)].filter(
      (href) => href!.startsWith(prefix) && !href!.startsWith("//")
    ) as string[];

    for (const href of unique) {
      const res = await request.get(`http://127.0.0.1:${port}${href}`);
      expect(res.status(), `Broken link: ${href} on ${path}`).toBeLessThan(400);
    }
  });
}
