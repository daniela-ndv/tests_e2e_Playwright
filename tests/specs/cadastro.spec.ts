import { gerarPerfil, Perfil } from "../operacoes/gerarPerfil";
import { test } from "../setup/fixtures";

test.describe('Página de cadastro', () =>{
    let novoUsuario: Perfil;
    
    test.beforeEach(async ({ paginaCadastro }) => {
        await paginaCadastro.visitar();
        novoUsuario = gerarPerfil();
    });

    test("Deve conseguir fazer cadastro", async ({ paginaCadastro }) => { 
        await paginaCadastro.cadastrarUsuario(novoUsuario);
        await paginaCadastro.cadastroFeitoComSucesso();
    });

    test("Não deve conseguir fazer cadastro com e-mail duplicado", async ({ paginaCadastro }) => {
        await paginaCadastro.cadastrarUsuario(novoUsuario);
        await paginaCadastro.cadastroFeitoComSucesso();

        await paginaCadastro.visitar();
        await paginaCadastro.cadastrarUsuario(novoUsuario);
        await paginaCadastro.estaMostrandoMensagemDeErro("E-mail já utilizado.");
    });
})