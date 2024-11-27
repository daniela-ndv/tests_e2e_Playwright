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


## Sobre os testes:
- Projeto base para realizar os testes: projeto local (API e front-end com Angular).
- Padrão Page Object Model. 
- Fixture no teste de login (remover repetições).
- Fixture de escopo do worker (servir informações específicas de cada worker, a fim de usar um login para cada worker). 
- Biblioteca faker.js para teste de cadastro. 
- Composição dos Page Objects (componentes usados em duas páginas diferentes). 
- Utilização de mocks (para teste de front end). 