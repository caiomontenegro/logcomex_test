# Logcomex Test 📜

- 1 [Introdução](#introdução)
  - 1.1 [Tecnologias Usadas](#tecnologias-usadas)
- 2 [Build Setup](#build-setup)
  - 2.1 [Modo Desenvolvedor](#modo-desenvolvedor)
  - 2.2 [Build Docker](#build-docker)
- 3 [Uso da Aplicação](#uso-da-aplicação)
- 4 [Melhorias](#melhorias)

## Introdução

<p>Este é um um teste de desenvolvimento front-end Vue.js</p>
<img src="@/assets/img/mobile_index.png" alt="mobile">

Trata-se de um micro serviço de consulta de funcionários, que contempla as seguintes funções:

- Consulta de funcionários.
- Detalhes dos funcionários.

</br>

### Tecnologias usadas:

- Javascript
- HTML
- CSS
- SASS pre processor
- Axios
- Vue.js
- Nuxt.js
- Firebase
- Gerenciamento de pacotes Yarn
- Docker

Extras:

- Componentização
- Arquitetura BEM CSS 1001
- Responsividade por mobilefirst
- Componentes básicos feitos manualmente
- Conventional Commits

</br></br></br>

##  Build Setup

Tutorial para rodar a aplicação

1 - Abra um terminal em sua máquina, e certifique-se de ter instalado o 
programa de versionamento de código Git. Para baixar acesse:

https://git-scm.com/

2 - Navegue para a pasta que deseja baixar estes repositório, utilizando:

    cd + nome da pasta - Para avançar o diretório.
    cd .. - Para voltar um diretório
    ls - Para visualizar as pastar do diretório atual
    mkdir + "nome" - Para criar uma nova pasta com nome informado

3 - Rode abaixo, para baixar o projeto:

    git clone https://github.com/caiomontenegro/logcomex_test.git

4 - Abra o projeto no terminal:

    cd customer.project

</br>

### Modo Desenvolvedor

1 - Após baixar o projeto, rode o comando abaixo para instalar todos os pacotes
e dependências necessárias do projeto:

    yarn 

2 - Em seguida, rode o comando abaixo, para buildar o projeto:

    yarn dev

Obs: A porta na qual o sistema irá a aplicação pode variar. Verique no terminal
em portal localhost o projeto será aberto. Por padrão a rota será:

http://localhost:3000/

</br>

### Build Docker

1 - Rode o comando abaixo para criar a imagem do container docker:

    docker-compose build

2 - Após criar a imagem, rode o comando abaixo para instanciar a imagem e rodar o container

    docker-compose up

A aplicação irá rodar na seguinte rota: **http://localhost:3000/**

Alguns terminais podem gerar conflitos, recomendo o terminal cmd do editor 
VSCode, no qual esta aplicação foi desenvolvida.

</br></br></br>

## Uso da Aplicação

Apesar do conceito da aplicação ser extremamente forte e usado no mercado de 
sistemas WEB, a aplicação é bem simples. 

O objetivo do desenvolvedor, foi criar algo que usuário possa acessar e interagir
sem a necessidade de um manual ou tutorial de uso. 

Sendo assim, fique a vontade para "esmiuçar". Caso não entenda algo, ou fique
com dúvidas em determinado ponto, significa que o teste foi falho neste ponto.
Porém não hesite em entrar em contato comigo para expor o erro. Meus contatos
estão no rodapé deste documento.


</br></br></br>

### Melhorias

Observações:

Os dados estão mockados em um servidor de teste Firebase, que pode 
demorar um pouco para responder as requisições.

Possíveis melhorias:

- **VUEX** - Usar o gerenciamento de estados para armezenar informações, sem a necessidade
de rechamadas requisições HTTP (Desempenho)
- **Cypress** - Escrever testes e2e, de todas as funcionadalides, âncoras, botões, intereções
e também um mock local para consultas, em caso de API FIrebase fora do ar.
- **Eslint** - Para padronização, escalabilidade e melhoria na manutenção do código. Essencial
para todos os tipos de desenvolvimentos.


Contato:
email: caio.dev17@gmail.com </br>
linkedin: https://www.linkedin.com/in/caio-montenegro/
