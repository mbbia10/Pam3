
# Backend - PAM3

## 📋 Sobre o Projeto

Backend do projeto PAM3, desenvolvido como parte da disciplina de Programação para Dispositivos Móveis.

## 🚀 Tecnologias Utilizadas

- Node.js
- NPM
- LocalTunnel (para exposição do servidor local)

## 📦 Instalação

### Pré-requisitos

- Node.js instalado
- NPM ou Yarn

### Passos para instalação

1. Clone o repositório
```bash
git clone [url-do-repositorio]
cd backend
```

2. Instale as dependências globais
```bash
npm install -g localtunnel
```

3. Instale as dependências do projeto
```bash
npm install
```

## 🔧 Configuração

Configure as variáveis de ambiente conforme necessário. Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
# outras variáveis de ambiente
```

## 🚀 Executando o Projeto

### Modo desenvolvimento
```bash
npm run dev
```

### Modo produção
```bash
npm start
```

### Expondo o servidor local com LocalTunnel

Para expor seu servidor local para a internet:

```bash
lt --port 3000
```

Exemplo de saída:
```
your url is: https://cold-turtles-cheat.loca.lt
```

Use a URL gerada para acessar seu backend remotamente.

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── config/
├── .env
├── package.json
└── README.md
```

## 🔌 Endpoints

[Liste aqui os principais endpoints da sua API]

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/` | Rota principal |
| POST | `/api/exemplo` | Exemplo de rota |

## 📝 Observações

- Certifique-se de que o servidor está rodando antes de usar o LocalTunnel
- A URL gerada pelo LocalTunnel é temporária e muda a cada execução
- Para testes em dispositivos móveis, use a URL gerada pelo LocalTunnel

## 👥 Autores

- Maria beatriz Nascimento Alves

