import { test } from '../setup/fixtures';

test.describe('buscar_passagens', ( )=> {
    test('Deve buscar passagens somente de ida', async ({ paginaPrincipal }) => {

        await paginaPrincipal.visitar();
        await paginaPrincipal.definirSomenteIda();

        await paginaPrincipal.abrirModalPassageiros();
        await paginaPrincipal.definirPassageirosAdultos(3);
        await paginaPrincipal.definirPassageirosCriancas(1);
        await paginaPrincipal.definirPassageirosBebes(1);
        await paginaPrincipal.fecharModalPassageiros();

        await paginaPrincipal.definirOrigemEDestino('minas gerais', 'rio de janeiro');
        const dataIda = new Date(); 
        await paginaPrincipal.definirData(dataIda);
        await paginaPrincipal.buscarPassagens();
        await paginaPrincipal.mostrarPassagem('Somente ida', 'Minas Gerais', 'Rio de Janeiro');
    });
});