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

## Testes com Mocks

Este projeto utiliza Vitest e Vue Test Utils para garantir a qualidade do componente principal (App.vue).
Foram implementados 20 testes automatizados, cobrindo casos positivos, negativos e cenários de navegação simulada.

## Estrutura dos testes

Casos de renderização:
Verificação de título, emojis, textos de instrução, classes CSS e estrutura da página.

Casos negativos:
Garantem que elementos inexistentes (ex.: botão de logout, campos de input) não apareçam na tela inicial.

Mocks de navegação:
O vue-router foi mockado usando vi.mock, permitindo simular o comportamento do useRouter().

Clique no botão Registrar Produção → router.push('/register')

Clique no botão Acessar Painel → router.push('/dashboard')

Testes confirmam que múltiplos cliques chamam o método o número correto de vezes.

## Cobertura

Total de testes: 20
Inclui: Renderização de elementos, classes de estilo, acessibilidade (aria-label), mocks de eventos de clique e casos negativos.
Objetivo: Garantir que a interface inicial funcione corretamente e que as ações de navegação sejam disparadas de forma controlada.

