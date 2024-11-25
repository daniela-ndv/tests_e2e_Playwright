import {test, expect} from '@playwright/test';

test.describe('home_page', () => {
    test('Deve visitar a página inicial', async ({ page }) => {
        await page.goto('/'); // Ação
        await expect(page).toHaveTitle('Jornada Milhas'); // Asserção

        const tituloPassagens = page.getByTestId('titulo-passagens');
        await expect(tituloPassagens).toHaveText('Passagens'); 
    });

    test('Deve buscar o título "Promoções"', async ({ page }) => {
        await page.goto('/'); 
        const tituloPromocoes = page.getByTestId('titulo-promocoes');
        await expect(tituloPromocoes).toHaveText('Promoções');
    });

    test('Deve buscar o título "Depoimentos"', async ({ page }) => {
        await page.goto('/'); 
        const tituloDepoimentos = page.getByTestId('titulo-depoimentos');
        await expect(tituloDepoimentos).toHaveText('Depoimentos');
    });
});