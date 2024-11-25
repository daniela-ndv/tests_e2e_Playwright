import { gerarPerfil } from '../operacoes/gerarPerfil.ts';
import { test } from '../setup/fixtures.ts';

test.describe('login', () => {
    test('Deve realizar login com e-mail e senha válidos', async ({ paginaLogin, paginaCadastro }) => {
        const novoUsuario = gerarPerfil();

        await paginaCadastro.visitar();
        await paginaCadastro.cadastrarUsuario(novoUsuario);
        await paginaCadastro.cadastroFeitoComSucesso();

        await paginaLogin.visitar();
        await paginaLogin.fazerLogin(novoUsuario.email, novoUsuario.senha);
        await paginaLogin.loginSucesso();
    });

    test('Não deve realizar login com e-mail inválido', async ({ paginaLogin }) => {
        await paginaLogin.visitar();
        await paginaLogin.fazerLogin('email.incorreto@teste.com', 'admin');
        await paginaLogin.msgErroLogin('Você não está autorizado a acessar este recurso');
    });  

    test('Não deve realizar login com campos em branco', async ({ paginaLogin, page }) => {
        await paginaLogin.visitar();
        await paginaLogin.msgErroCamposEmBranco('', 'admin', 'E-mail é obrigatório');
        await page.reload();
        await paginaLogin.msgErroCamposEmBranco('admin@teste.com', '', 'Senha é obrigatória');
    });  

});