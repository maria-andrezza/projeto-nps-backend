API de Gestão de NPS (Net Promoter Score)

Esta é uma API REST desenvolvida em **Node.js** para gerenciar feedbacks de clientes. O sistema permite cadastrar empresas, colaboradores e coletar pesquisas, realizando automaticamente o cálculo e a classificação do NPS.

## 🛠️ Tecnologias Utilizadas
* **Node.js**: Ambiente de execução.
* **Express**: Framework para rotas e middleware.
* **CORS**: Gerenciamento de acessos externos.
* **Nodemon**: Reinicialização automática do servidor durante o desenvolvimento.
* **Thunder Client**: Testes de requisições HTTP.

## 📂 Organização do Projeto (Arquitetura MVC)
O projeto segue uma estrutura organizada para facilitar a manutenção:
* `src/controllers`: Lógica de negócio e processamento de dados.
* `src/routes`: Definição de endpoints e endereços da API.
* `app.js`: Ponto de entrada e configuração do servidor.

## 🧪 Demonstração dos Testes (Endpoints)

### 1. Cadastro de Colaboradores
A API permite vincular colaboradores a empresas específicas através de IDs.
> <img width="1609" height="569" alt="image" src="https://github.com/user-attachments/assets/41e68f30-45d2-4ef5-9dff-80cbaf8c5ada" />



### 2. Registro de Pesquisas e Classificação Automática
Ao receber uma nota, a API classifica o feedback automaticamente como **Promotor**, **Neutro** ou **Detrator**.
> <img width="1604" height="608" alt="image" src="https://github.com/user-attachments/assets/38feb4d5-049e-4d2b-97f8-d07e4202961e" />


### 3. Dashboard de Métricas
Endpoint que consolida os dados e apresenta o status atual do NPS.
> <img width="1607" height="608" alt="image" src="https://github.com/user-attachments/assets/91646482-0548-4041-9dad-4d0e77b8af6c" />


## 🚀 Como rodar o projeto localmente

1. Clone o repositório.
2. No terminal, entre na pasta: `cd backend`.
3. Instale as dependências: `npm install`.
4. Inicie o servidor: `npx nodemon src/app.js`.
5. O servidor estará disponível em: `http://localhost:3000`.

Este MVP demonstra a capacidade de criar uma API escalável, organizada e com lógica de negócio aplicada a métricas de experiência do cliente (NPS).
