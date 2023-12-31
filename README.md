# uploadImg-multer-sequelize

## Introdução
Este é um projeto  desenvolvido com Node.js, Express, Sequelize, Multer e MySQL. O projeto permite que os usuários criem postagens, incluindo títulos, descrições e imagens. As imagens são carregadas no servidor e os detalhes da postagem são armazenados em um banco de dados.

## Instruções de Uso
Aqui estão as instruções básicas para configurar e usar o projeto:

### Pré-requisitos
- Node.js e npm devem estar instalados.
- Você deve ter um banco de dados MySQL configurado.
- Recomendado: Um software como o MySQL Workbench para gerenciar o banco de dados.

### Instalação
1. Clone o repositório do projeto.
2. Execute `npm install` para instalar as dependências do projeto.

### Configuração do Banco de Dados
1. Configure as informações do banco de dados no arquivo `config/config.json`.
2. Certifique-se de criar um banco de dados no seu servidor MySQL com o mesmo nome configurado no arquivo de configuração.

### Iniciar o Servidor
1. Execute `npm start` para iniciar o servidor.
2. O servidor estará disponível em `http://localhost:3000`.

## Rotas da API

### POST /api/posts
- Cria uma nova postagem.
- Parâmetros:
  - `title` (obrigatório): O título da postagem.
  - `description` (obrigatório): A descrição da postagem.
  - `image` (opcional): A imagem da postagem.
- Exemplo de uso:
  ```json
  {
    "title": "Minha primeira postagem",
    "description": "Uma descrição interessante da postagem",
    "image": "imagem.jpg"
  }
  ```
- Resposta:
  - A postagem criada será retornada.

### GET /api/posts
- Obtém todas as postagens.
- Resposta:
  - Uma lista de todas as postagens.

## Estrutura do Projeto
Aqui está a estrutura básica do projeto:

- `app.js`: Configuração do aplicativo Express.
- `config/config.json`: Configuração do banco de dados.
- `controllers/postController.js`: Controladores para criar e obter postagens.
- `database/models/post.js`: Modelo do Sequelize para postagens.
- `public/uploads`: Diretório onde as imagens são armazenadas.
- `routes/index.js`: Rotas da API.
- `package.json`: Arquivo de configuração do Node.js.

## Dependências
- Express: Framework web para Node.js.
- Sequelize: ORM (Object-Relational Mapping) para MySQL.
- Multer: Middleware para o upload de imagens.
- MySQL2: Pacote para conexão com o banco de dados MySQL.
- Cors: Middleware para habilitar solicitações de domínios diferentes.
- Nodemon: Ferramenta de desenvolvimento para reiniciar o servidor automaticamente após alterações no código.

## Conclusão
Este projeto é uma aplicação básica que demonstra como criar um blog simples com funcionalidades de criação e leitura de postagens. Ele utiliza várias tecnologias comuns em desenvolvimento web, como Node.js, Express e MySQL. Você pode expandir este projeto adicionando recursos adicionais, como autenticação de usuário, edição de postagens, ou melhorias na interface do usuário.
