# Tests e2e – Playwright
📌 Testes end-to-end utilizando Playwright e TypeScript. 

📄 Documentação oficial: https://playwright.dev/docs/intro

### Instalar as dependências para rodar o projeto: 
    npm init playwright@latest

## Comandos:
    npm init playwright@latest
    // Instalar as dependências para rodar o projeto

    npx playwright test     
    // Execução em todos os navegadores, conforme playwright.config

    npx playwright show-report      
    // Relatório de testes (HTML report) 

Outras especificações:
    
    testes_gerais.spec.ts      
    // Nome do arquivo.ts: roda os testes existentes no arquivo específico
    
    --project=chromium      
    // Especificação de navegador para testar
    
    --workers=1         
    // Representa um WebWorker. Sendo igual a 1, realiza um teste por vez, na sequência do arquivo

    --headed 
    // Deixa o navegador visível quando roda os testes 
    
    --grep="nome_do_teste"      
    // Especifica qual teste executar

Exemplo com especificações:

    npx playwright test testes_gerais.spec.ts --project=chromium --workers=1


## Modo UI:
Com esse modo, é possível explorar, executar e depurar testes. Para abrir o modo UI, execute o seguinte comando no seu terminal:

    npx playwright test --ui


## Estrutura dos testes:
- Utilizou-se um projeto local (front-end e API) para realizar os testes.
- Padrão Page Object Model. 
