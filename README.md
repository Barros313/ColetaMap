# ColetaMap 

## Informações Pessoais

| Célula     | Valor                     |
|------------|---------------------------|
| Nome       | Gabriel Barros de Almeida |
| Faculdade  | Faculdade Senac PE        |
| Turma      | TADS028 - Noite           |
| Disciplina | Coding: Mobile            |

## Introdução
O ColetaMap é um aplicativo que mostra os pontos de coleta seletiva e de resíduos disponíveis em recife.

#### [ColetaMap - Demonstração Youtube](https://youtu.be/YnCd2Hr025E)

### Dados
Os dados tirados para mapear os pontos de coleta foram tirados da base de dados da prefeitura de recife:

####  [Pontos de Coleta - Dados Recife](http://dados.recife.pe.gov.br/dataset/pontos-de-coleta-seletiva/resource/ef521704-6960-4ef1-8f98-a60db4a0d79b)

## Instalação Local

### Requisitos para instalação

* [MongoDB Compass](https://www.mongodb.com/products/tools/compass) - Banco de Dados NoSQL
* [NodeJS](https://nodejs.org/en) - Backend com JavaScript
* NPM - JavaScript package manager
* React Native (Expo CLI) - Frontend com React Native
* [Expo GO](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) - App android para executar o projeto 

### Baixando os arquivos

1. Realize o clone deste repositório ou baixe os arquivos localmente 
    > git clone https://github.com/Barros313/ColetaMap.git
2. Abra dois terminais
3. Em um dos terminais baixe os pacotes do backend
    ```
   cd coleta-map_backend
   npm install
   ```
4. No outro terminal baixe os pacotes do frontend
   ```
   cd coleta-map_frontend
   npm install
   ```

### Configurando o ambiente

Após instalar as dependências, configure as variáveis do ambiente que estão configuradas pelo pacote .env

1. Crie um arquivo com o nome `.env` tanto na pasta `coleta-map_frontend` quanto na `coleta-map_backend`
2. Preencha o `.env` do backend com os seguintes valores:
    
    | Campo           | Descrição                                                                | Exemplo                                       |
    |-----------------|--------------------------------------------------------------------------|-----------------------------------------------|
    | MONGODB_URI     | URL do servidor do MongoDB                                               | mongodb://localhost:27017                     |
    | JWT_EXAMPLE_KEY | Chave secreta para criptografar senhas utilizando o Javascript Web Token | Chave HS256 (muito extensa para mostrar aqui) |
    | PORT            | Porta para utilizar o servidor do backend                                | 8000                                          |


3. No backend, rode o script para baixar os dados da prefeitura de recife:

``` 
node createDatabase.js 
```

4. Preencha o `.env` do frontend com os seguintes valores:
   
    | Campo                       | Descrição                                                                               | Exemplo                 |
    |-----------------------------|-----------------------------------------------------------------------------------------|-------------------------|
    | EXPO_PUBLIC_BACKEND_ADDRESS | Endereço do backend local composto pelo endereço de ipv4 + a porta utilizada no backend | http://192.168.0.0:8000 |

* É possível ver o seu endereço IPV4 utilizando o comando `ipconfig` no terminal de comando

### Inicializando o ambiente

Após baixar os arquivos e configurar o ambiente resta apenas ligar os servidores:

1. No terminal do backend rode `npm start`
2. No terminal do frontend rode `npx expo start`
3. Abra o app Expo GO no seu celular e escaneie o QR Code apresentado no terminal do frontend

* Caso tenha Android Studio configurado no seu computador é conectar o celular no seu computador utilizando um cabo USB e rodando `npx expo start --localhost --android` no terminal do frontend, é preciso ter acesso de desenvolvedor no celular Android e ter a permissão USB Debugger ativado!

    