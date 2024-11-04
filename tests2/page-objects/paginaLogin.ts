import {test as base, expect, Locator, Page} from '@playwright/test';

export const test = base.extend<{ paginaLogin: PaginaLogin}>({
    paginaLogin: async ({ page }, use) => {
        const paginaLogin = new PaginaLogin(page);
        await paginaLogin.visitar();
        await use(paginaLogin); 
    }
})

export default class PaginaLogin {
    private readonly page: Page;
    private readonly inputEmail: Locator;
    private readonly inputSenha: Locator;
    private readonly botaoLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputEmail = page.locator('input#username');
        this.inputSenha = page.locator('input#password');
        this.botaoLogin = page.getByRole('button', { name: 'Sign in' });
    }

    async visitar(){
        await this.page.goto('/');  
        const msgWelcome = await this.page.getByRole('heading', { name: 'Welcome!' });    
        await expect(msgWelcome).toBeVisible();  
    }

    async fazerLogin(email: string, senha:string){
        await this.inputEmail.fill(email);
        await this.inputSenha.fill(senha);
        await this.botaoLogin.click();
    }

    async verificarLogin(){
        const homePage = await this.page.getByRole('link', { name: 'Playwright Testes' })
        await expect(homePage).toBeVisible()
    }
    
}

