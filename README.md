# Tests e2e – Playwright
Testes end-to-end utilizando Playwright e TypeScript. 

#### Documentação: https://playwright.dev/docs/intro

### Comandos:
    npx playwright test  
    // execução em todos os navegadores, conforme playwright.config

    npx playwright show-report
    // relatório de testes (abre um servidor local) 

    npx playwright test testes_gerais.spec.ts --project=chromium --workers=1
    // roda os testes existentes no arquivo específico, utilizando navegador específico (chrome), um teste por vez

