import {expect, Locator, Page} from '@playwright/test';
import {test as base} from '@playwright/test';

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
    private readonly botaoConta: Locator;
    private readonly botaoLogout: Locator;
    private readonly msgWelcome: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inputEmail = page.locator('input#username');
        this.inputSenha = page.locator('input#password');
        this.botaoLogin = page.getByRole('button', { name: 'Sign in' });
        this.botaoConta =  page.getByTitle('playwright@testes.com (playwright@testes.com)')
        this.botaoLogout = page.getByRole('link', { name: ' Logout' });
        this.msgWelcome = page.getByRole('heading', { name: 'Welcome!' });
    }

    async visitar(){
        await this.page.goto('/');    
        await expect(this.msgWelcome).toBeVisible();  
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

    async fazerLogout(){
        await this.page.waitForTimeout(2000);
        await this.botaoConta.click();
        await this.botaoLogout.click();
    }

    async verificarLogout(){
        await expect(this.msgWelcome).toBeVisible();  
    }
    
}

