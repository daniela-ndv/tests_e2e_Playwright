import {expect,  Locator,  Page} from '@playwright/test';
import { Perfil } from '../operacoes/gerarPerfil';
import formBaseCadastroEPerfil from './formBaseCadastroEPerfil';

export default class PaginaCadastro {
    private readonly page: Page;
    private readonly formBase: formBaseCadastroEPerfil;
    private readonly botaoVisitarPaginaCadastro: Locator;
    private readonly checkboxTermos: Locator;

    constructor(page: Page) {
        this.page = page;
        this.formBase = new formBaseCadastroEPerfil(page);
        this.botaoVisitarPaginaCadastro = page.getByTestId('header-botao-cadastre-se');
        this.checkboxTermos = page.getByTestId('form-base-checkbox-termos').getByLabel('Li e aceito os termos e condições deste cadastro');
    }

    async visitar(){
        await this.page.goto('/');
        await this.botaoVisitarPaginaCadastro.click();
        await expect(this.page).toHaveURL('/auth/cadastro')
    }
    
    async confirmarTermos() {
        await this.checkboxTermos.check();
    }

    async cadastrarUsuario(usuario: Perfil){
        await this.formBase.preencherForm(usuario);
        await this.confirmarTermos();
        await this.formBase.submeterForm();
    }

    async cadastroFeitoComSucesso(){
        await expect(this.page).toHaveURL('/auth/login')
    }

    async estaMostrandoMensagemDeErro(mensagem: string){
        const elementoErro = this.page.getByText(mensagem);
        await expect(elementoErro).toBeVisible();
    }

}