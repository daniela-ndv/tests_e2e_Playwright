import {expect, Locator, Page} from '@playwright/test';

export default class PaginaLogin {
    private readonly page: Page;
    private readonly botaoLogin: Locator;
    private readonly inputEmail: Locator;
    private readonly inputSenha: Locator;
    private readonly botaoAcessarConta: Locator;
    private readonly botaoLogout: Locator;

    constructor(page: Page) {
        this.page = page;
        this.botaoLogin = page.getByTestId('botao-login');
        this.inputEmail = page.getByTestId('input-email');
        this.inputSenha = page.getByTestId('input-senha');
        this.botaoAcessarConta = page.getByTestId('botao-acessar-conta');
        this.botaoLogout = page.getByRole('button', { name: 'SAIR' });
    } 

    async visitar() {
        await this.page.goto('/');
        await this.botaoLogin.click();
        await expect(this.page).toHaveURL('/auth/login')
    }

    async fazerLogin(email: string, senha: string) {
        await this.inputEmail.fill(email);
        await this.inputSenha.fill(senha);
        await this.botaoAcessarConta.click();
    }

    async loginSucesso() {
        await expect(this.page).toHaveURL('/home');
    }

    async msgErroLogin(msg: string) {
        const elementoErro = this.page.getByText(msg);
        await expect(elementoErro).toBeVisible();
    }

    async msgErroCamposEmBranco(email: string, senha: string, msg: string) {
        const elementoErro = this.page.getByText(msg);
        await this.inputEmail.fill(email);
        await this.inputSenha.fill(senha);
        await this.inputEmail.click(); 
        await expect(elementoErro).toBeVisible();
    }
}