import {test, expect} from '@playwright/test';

test.describe("home_page", () => {
    test("Deve visitar a página inicial", async ({ page }) => {
        await page.goto("http://localhost:4200/"); // Ação
        await expect(page).toHaveTitle("Jornada Milhas"); // Asserção

        const tituloPassagens = page.getByRole('heading', { name: 'Passagens' });
        await expect(tituloPassagens).toBeVisible();
    });
});