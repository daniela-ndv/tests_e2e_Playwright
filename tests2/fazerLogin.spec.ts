import { test } from './page-objects/paginaLogin.ts';

test.describe('fazer_login', () => {
    test('Deve realizar login', async ({ paginaLogin }) => {
        await paginaLogin.fazerLogin('playwright@testes.com', 'admin');
        await paginaLogin.verificarLogin();        
    })

    test('Deve realizar login e logout', async ({ paginaLogin}) => {
        await paginaLogin.fazerLogin('playwright@testes.com', 'admin');
        await paginaLogin.verificarLogin();  
        await paginaLogin.fazerLogout();
        await paginaLogin.verificarLogout();
     })   

})