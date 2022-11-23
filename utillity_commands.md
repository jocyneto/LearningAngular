# Comandos úteis:

    1. Instalar o angular
        ```
            npm install -g @angular/cli
        ```
        OU
        ```
            npm i -g @angular/cli
        ```

    2. Verificar se tem o angular instalado
        ```
            angular -v
        ```

    3. Verificar versão do Angular após instalado
        ```
            ng version
        ```

    4. Criando novo projeto
        ```
            ng new nome_do_projeto
        ```

    5. Iniciando projeto
        a) Acessar diretório do projeto;
        b) Executar o comando:
        ```
            ng serve
        ```
        c) Ele te dará o localhost de acesso, normalmente: http://localhost:4200/
        Extra:
        - Ao executar o projeto ele já abre:
        ```
            ng serve --open
        ```

    6. Instalacao Bootstrap:
        npm install --save bootstrap@3
        No arquivo angular.json na parte styles colocar esse caminho acima do style.css: "node_modules/bootstrap/dist/css/bootstrap.min.css"
    
    7. Criando componente automaticamente:
     ```
        ng generate component nome_component
     ```

    ```
        ng g c nome_component
    ```

    8. Databiding
    ![Esquema de comunicacao](.\imgs\databiding.png)