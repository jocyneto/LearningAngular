# Instalar o angular
'''
    npm install -g @angular/cli
'''
OU
'''
    npm i -g @angular/cli
'''

# Verificar se tem o angular instalado
'''
    angular -v
'''

# Verificar versão do Angular após instalado
'''
    ng version
'''

# Criando novo projeto
'''
    ng new nome_do_projeto
'''

# Iniciando projeto
1- Acessar diretório do projeto;
2- Executar o comando:
'''
    ng serve
'''
3- Ele te dará o localhost de acesso, normalmente: http://localhost:4200/

Extra:
- Ao executar o projeto ele já abre:
'''
    ng serve --open
'''

# Instalacao Bootstrap:
npm install --save bootstrap@3

No arquivo angular.json na parte styles colocar esse caminho acima do style.css: "node_modules/bootstrap/dist/css/bootstrap.min.css"