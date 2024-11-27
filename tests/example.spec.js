// @ts-check
const {test, expect} = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test.describe('homepage', () => { // 2
    test('should have correct structure', async ({page}) => {
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


    test('should not have any automatically detectable accessibility issues', async ({page}) => {
        await page.goto('http://localhost:3000/');

        const accessibilityScanResults = await new AxeBuilder({page}).analyze();

        expect(accessibilityScanResults.violations).toEqual([]);
    });
});
