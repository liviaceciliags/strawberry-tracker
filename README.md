# strawberry-tracker

Aplicação web para produtores de morango registrarem e gerenciarem a produção diária de caixas.  
Front-end em Vue 3 + TypeScript (Vite) + Tailwind CSS. Integração posterior com API em Python (FastAPI) + MySQL.

---

## Funcionalidades (MVP)

- Tela de login
- Registro diário de produção (data, caixas, observações)
- Listagem/remoção de registros
- Preparado para autenticação via JWT (quando a API estiver ativa)

---

## Tecnologias

- Front-end: Vue 3, TypeScript, Vite, Pinia, Vue Router, Axios, Tailwind CSS  
- Back-end (posterior): FastAPI, SQLAlchemy, Alembic, MySQL

---

## Pré-requisitos

- Node.js 18+
- (opcional) Python 3.11+ e MySQL para o back-end

---

## Como rodar (Frontend)

```bash
# 1) clonar e entrar no projeto
git clone https://github.com/<seu-usuario>/strawberry-tracker.git
cd strawberry-tracker/strawberry-prod

# 2) instalar dependências
npm install

# 3) executar em desenvolvimento
npm run dev
```

## Build de produção
- cd strawberry-prod
- npm run build
- npm run preview

## Histórico de Conflito

Durante o desenvolvimento, ocorreu um conflito proposital no arquivo `App.vue`, na linha do emoji do título.  
Um colaborador adicionou o emoji de uva (🍇) e outro manteve o emoji de morango (🍓).  
O conflito foi resolvido deixando apenas o emoji de morango (🍓) para manter a identidade do projeto.

Esse ajuste foi feito na mesma linha do código, garantindo clareza e padronização visual.

