import { test, expect } from "@playwright/test";

const PAGES = [
  "/clearfintest",
  "/clearfintest/services",
  "/clearfintest/about",
  "/clearfintest/partners",
  "/clearfintest/contact",
];

for (const path of PAGES) {
  test(`${path} has no broken internal links`, async ({ page, request }) => {
    await page.goto(path);

    const hrefs = await page
      .locator('a[href^="/clearfintest"]')
      .evaluateAll((els) =>
        els.map((el) => el.getAttribute("href")).filter(Boolean)
      );

    const unique = [...new Set(hrefs)] as string[];

    for (const href of unique) {
      const res = await request.get(`http://127.0.0.1:3001${href}`);
      expect(res.status(), `Broken link: ${href} on ${path}`).toBeLessThan(400);
    }
  });
}
