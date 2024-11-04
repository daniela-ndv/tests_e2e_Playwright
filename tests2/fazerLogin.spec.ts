import test, { expect } from "@playwright/test";
import PaginaLogin from "./page-objects/paginaLogin";

test.describe('fazer_login', () => {
    test('Deve realizar login', async ({ page }) => {
        const paginaLogin = new PaginaLogin(page);
        await paginaLogin.visitar();
        await paginaLogin.fazerLogin('playwright@testes.com', 'login');
        await paginaLogin.verificarLogin();        
    })

})