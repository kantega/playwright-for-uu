// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('#root')).toMatchAriaSnapshot(`
    - heading "Eventyrbilder" [level=4]
    - textbox "Søk"
    - img "Bilde"
    - text: Tid
    - img "Bilde"
    - text: Noe glemt
    - img "Bilde"
    - text: Et forsøk
    - img "Bilde"
    - text: Uheldig
    - img "Bilde"
    - text: Fri
    - img "Bilde"
    - text: Nytt liv
    - img "Bilde"
    - text: Evner
    - img "Bilde"
    - text: Fly
    - img "Bilde"
    - text: Det første som faller
    `);
});

// test('get started link', async ({ page }) => {
//
//
// });
