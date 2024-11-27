import { expect, Locator, Page } from "@playwright/test";
import formBaseCadastroEPerfil from "./formBaseCadastroEPerfil";
import { Perfil } from "../operacoes/gerarPerfil";
import { formatarDataParaForm } from "../operacoes/datas";

export default class PaginaPerfil{
    private readonly page: Page;
    readonly formBase: formBaseCadastroEPerfil;
    private readonly linkPerfil: Locator;
    private readonly botaoDeslogar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formBase = new formBaseCadastroEPerfil(page);
        this.linkPerfil = page.getByTestId('header-link-perfil');
        this.botaoDeslogar = page.getByTestId('form-base-botao-deslogar');
    }

    async visitar(){
        await this.page.goto('/');
        await this.linkPerfil.click();
        await expect(this.page).toHaveURL('/auth/perfil')
    }
    
    async atualizarUsuario(novosDados: Perfil){
        await this.formBase.preencherForm(novosDados);
        await this.formBase.submeterForm();
    }

    async atualizadoComSucesso(){
        await expect(this.page).toHaveURL('/home')
    }

    async dadosEstaoCorretos({ nome, dataNascimento, genero, cpf, telefone, cidade, estado, email }: Perfil){
        const dataNascimentoFormatada = formatarDataParaForm(dataNascimento);
        const radioGenero = this.formBase.radioGenero[genero];

        await expect(this.formBase.inputNome).toHaveValue(nome);
        await expect(this.formBase.inputDataNascimento).toHaveValue(dataNascimentoFormatada);
        await expect(radioGenero).toBeChecked();
        await expect(this.formBase.inputCpf).toHaveValue(cpf);
        await expect(this.formBase.inputTelefone).toHaveValue(telefone);
        await expect(this.formBase.inputCidade).toHaveValue(cidade);
        await expect(this.formBase.inputEstado).toHaveValue(estado);
        await expect(this.formBase.inputEmail).toHaveValue(email);
    }

}