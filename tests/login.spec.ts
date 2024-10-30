import {test, expect} from '@playwright/test';
import PaginaLogin from './page-objects/paginaLogin';

test.describe('login', () => {
    test('Deve realizar login com e-mail e senha válidos', async ({ page }) => {
        // Padrão Page Object Model => instanciar a página como classe
        const loginPage = new PaginaLogin(page);

        await loginPage.visitar();
        await loginPage.fazerLogin('admin@teste.com', 'admin');
        await loginPage.loginSucesso();
    });

    test('Não deve realizar login com e-mail inválido', async ({ page }) => {
        const loginPage = new PaginaLogin(page);

        await loginPage.visitar();
        await loginPage.fazerLogin('email.incorreto@teste.com', 'admin');
        await loginPage.msgErroLogin('Você não está autorizado a acessar este recurso');
    });  

});