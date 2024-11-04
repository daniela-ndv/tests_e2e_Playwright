import { test } from './page-objects/paginaLogin.ts';
import paginaLogin from './page-objects/paginaLogin.ts';

test.describe('login', () => {
    test('Deve realizar login com e-mail e senha válidos', async ({ paginaLogin }) => {
        await paginaLogin.fazerLogin('admin@teste.com', 'admin');
        await paginaLogin.loginSucesso();
    });

    test('Não deve realizar login com e-mail inválido', async ({ paginaLogin }) => {
        await paginaLogin.fazerLogin('email.incorreto@teste.com', 'admin');
        await paginaLogin.msgErroLogin('Você não está autorizado a acessar este recurso');
    });  

    test('Não deve realizar login com campos em branco', async ({ paginaLogin, page }) => {
        await paginaLogin.msgErroCamposEmBranco('', 'admin', 'E-mail é obrigatório');
        await page.waitForTimeout(1000);
        await page.reload();
        await paginaLogin.msgErroCamposEmBranco('admin@teste.com', '', 'Senha é obrigatória');
        await page.waitForTimeout(1000);
        await page.reload();
    });  

});