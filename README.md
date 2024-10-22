# Tests e2e – Playwright
📌 Testes end-to-end utilizando Playwright e TypeScript. 

📄 Documentação oficial: https://playwright.dev/docs/intro

## Comandos:
    npx playwright test  
    // execução em todos os navegadores, conforme playwright.config

    npx playwright show-report
    // relatório de testes (abre um servidor local) 

    Outras especificações:
    testes_gerais.spec.ts // roda os testes existentes no arquivo específico
    --project=chromium  // Especificação de navegador
    --workers=1  // Um teste por vez
    --grep="nome_do_teste"  // Qual teste executar

Exemplo:

    npx playwright test testes_gerais.spec.ts --project=chromium --workers=1


#### Modo UI:
Com esse modo, é possível explorar, executar e depurar testes. Para abrir o modo UI, execute o seguinte comando no seu terminal:

    npx playwright test --ui


