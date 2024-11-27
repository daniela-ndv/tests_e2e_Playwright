import {test as base} from '@playwright/test';
import PaginaLogin from '../page-objects/paginaLogin';
import PaginaPrincipal from '../page-objects/paginaPrincipal';
import PaginaCadastro from '../page-objects/paginaCadastro';
import PaginaPerfil from '../page-objects/paginaPerfil';

export const test = base.extend<{ 
    paginaPrincipal: PaginaPrincipal;
    paginaLogin: PaginaLogin;
    paginaCadastro: PaginaCadastro;
    paginaPerfil: PaginaPerfil;
}>({
    paginaPrincipal: async ({ page }, use) => {
        const paginaPrincipal = new PaginaPrincipal(page);
        await use(paginaPrincipal); 
    },
    paginaLogin: async ({ page }, use) => {
        const paginaLogin = new PaginaLogin(page);
        await use(paginaLogin); 
    },
    paginaCadastro: async ({ page }, use) => {
        const paginaCadastro = new PaginaCadastro(page);
        await use(paginaCadastro); 
    },
    paginaPerfil: async ({ page }, use) => {
        const paginaPerfil = new PaginaPerfil(page);
        await use(paginaPerfil); 
    },
})