# Tests e2e – Playwright
📌 Testes end-to-end utilizando Playwright e TypeScript. 

📄 Documentação oficial: https://playwright.dev/docs/intro

## Comandos:
    npx playwright test     // execução em todos os navegadores, conforme playwright.config

    npx playwright show-report      // relatório de testes (abre um servidor local) 

    Outras especificações:
    testes_gerais.spec.ts       // Nome do arquivo.ts: roda os testes existentes no arquivo específico
    --project=chromium      // Especificação de navegador para testar
    --workers=1         // Representa um WebWorker. Sendo igual a 1, realiza um teste por vez, na sequência do arquivo
    --grep="nome_do_teste"      // Especifica qual teste executar

Exemplo:

    npx playwright test testes_gerais.spec.ts --project=chromium --workers=1


#### Modo UI:
Com esse modo, é possível explorar, executar e depurar testes. Para abrir o modo UI, execute o seguinte comando no seu terminal:

    npx playwright test --ui


