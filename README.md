# 🦈 Shark Academy — PoC de Arquitetura e Paradigmas de Programação

> **Projeto acadêmico — Equipe 4 | Incubadora CRIA**

Proof of Concept (PoC) desenvolvido para demonstrar, de forma prática, os impactos do **estado global compartilhado**, do **acoplamento** e do **débito técnico**, comparando uma implementação problemática com uma arquitetura refatorada e modular.

---

## 📌 Sobre o Projeto

O projeto simula uma pequena plataforma de comércio eletrônico chamada **Shark Store**, contendo funcionalidades de:

- Produtos
- Estoque
- Pedidos
- Controle de concorrência
- Processamento de compras

A aplicação possui **duas implementações do mesmo sistema**:

1. 🔴 **Legacy** — implementação problemática, baseada em estado global compartilhado.
2. 🟢 **Refatorada** — implementação modular, utilizando encapsulamento, separação de responsabilidades e controle de concorrência.

O objetivo é permitir uma comparação prática entre as duas abordagens.

---

# 1. 🔎 Diagnóstico

Uma aplicação inicialmente pequena pode começar com uma estrutura simples, porém algumas decisões arquiteturais podem gerar problemas conforme o sistema cresce.

Entre os principais problemas analisados estão:

- Estado global compartilhado;
- Alterações diretas no estado da aplicação;
- Forte acoplamento entre componentes;
- Efeitos colaterais difíceis de controlar;
- Falta de encapsulamento;
- Problemas em operações concorrentes;
- Dificuldade de manutenção;
- Aumento do débito técnico.

### Exemplo da arquitetura problemática

```text
Frontend
    │
    ▼
 Flask API
    │
    ▼
Global State
 ┌───────────────┐
 │   Products    │
 │    Orders     │
 │   Inventory   │
 └───────────────┘
```

Nesse modelo, diferentes partes da aplicação podem acessar e modificar diretamente o mesmo estado.

Isso aumenta a possibilidade de efeitos colaterais e torna a evolução do sistema mais difícil.

---

# 2. 🔗 Ponte Técnica

Para analisar os problemas encontrados, são aplicados conceitos relacionados aos paradigmas de programação e à arquitetura de software.

| Problema | Conceito aplicado |
|---|---|
| Estado global compartilhado | Encapsulamento |
| Alterações diretas no estado | Imutabilidade |
| Componentes fortemente dependentes | Modularidade |
| Operações simultâneas | Concorrência |
| Busca de dados | Complexidade Big-O |
| Código difícil de evoluir | Refatoração |
| Efeitos colaterais | Separação entre lógica e efeitos externos |

### Conceitos demonstrados

#### Encapsulamento

O estoque deixa de ser manipulado diretamente por qualquer parte da aplicação.

A responsabilidade passa para uma classe ou serviço específico:

```text
OrderService
     │
     ▼
 Inventory
     │
     ├── reserve_stock()
     ├── get_stock()
     └── regras de estoque
```

---

#### Modularidade

Cada componente passa a possuir uma responsabilidade mais bem definida.

```text
Frontend
    │
    ▼
 Flask API
    │
    ├──────────────┐
    ▼              ▼
 Product       OrderService
                   │
                   ▼
               Inventory
```

Isso reduz o acoplamento e facilita futuras alterações.

---

#### Concorrência

O projeto demonstra um cenário em que **duas compras tentam adquirir simultaneamente a última unidade disponível**.

### Cenário

```text
Estoque inicial: 1

Compra A ──────┐
               ├──► Estoque
Compra B ──────┘
```

Na implementação problemática, ambas as operações podem consultar o estoque antes que a alteração seja registrada.

Na implementação refatorada, o acesso ao estoque é controlado para garantir consistência.

Resultado esperado:

```text
Estoque inicial: 1
Compras simultâneas: 2

Compra A → APROVADA
Compra B → REJEITADA

Estoque final: 0
```

---

# 3. 💡 Hipótese da Solução

A hipótese do projeto é que a substituição de um **estado global compartilhado** por componentes com responsabilidades bem definidas, utilizando **encapsulamento, modularidade e controle adequado da concorrência**, pode reduzir efeitos colaterais e facilitar a evolução da aplicação.

A proposta não é eliminar completamente o débito técnico, mas demonstrar como determinadas decisões arquiteturais podem reduzir fatores que contribuem para sua acumulação.

---

# 🏗️ Arquitetura

## 🔴 Legacy

A implementação Legacy utiliza um estado global compartilhado:

```text
Frontend
    │
    ▼
 Flask API
    │
    ▼
Global State
    ├── Products
    ├── Orders
    └── Inventory
```

### Características

- Estado compartilhado;
- Alta dependência entre componentes;
- Alterações diretas nos dados;
- Maior quantidade de efeitos colaterais;
- Maior dificuldade de manutenção;
- Vulnerabilidade a problemas de concorrência.

---

## 🟢 Refatorada

A implementação refatorada separa as responsabilidades:

```text
Frontend
    │
    ▼
 Flask API
    │
    ├──────────────┐
    ▼              ▼
 Product       OrderService
                   │
                   ▼
                Inventory
                   │
                   ▼
                 Events
```

### Características

- Encapsulamento;
- Separação de responsabilidades;
- Modularidade;
- Menor acoplamento;
- Controle de concorrência;
- Separação entre lógica de negócio e efeitos externos.

---

# 🧪 Demonstração

A aplicação permite selecionar a implementação que será utilizada:

```text
┌───────────────────────────────┐
│      Shark Store              │
├───────────────────────────────┤
│                               │
│  Implementação:               │
│                               │
│  [ Legacy ▼ ]                 │
│                               │
│  [ Simular compras simultâneas ] │
│                               │
└───────────────────────────────┘
```

A mesma operação pode ser executada nas duas implementações para facilitar a comparação.

### Exemplo

| Métrica | Legacy | Refatorada |
|---|---:|---:|
| Estoque inicial | 1 | 1 |
| Compras simultâneas | 2 | 2 |
| Compras aprovadas | 2* | 1 |
| Compras rejeitadas | 0* | 1 |
| Estoque final | inconsistente* | 0 |

> \* O comportamento da implementação Legacy é propositalmente utilizado como demonstração do problema de concorrência.

---

# 📊 Complexidade Big-O

O projeto também demonstra a diferença entre estratégias de busca.

### Busca linear

```python
for product in products:
    if product["id"] == product_id:
        return product
```

Complexidade:

```text
O(n)
```

### Busca utilizando estrutura de acesso direto

```python
products[product_id]
```

Complexidade média:

```text
O(1)
```

O objetivo é demonstrar que as estruturas de dados utilizadas também influenciam o desempenho e a escalabilidade da aplicação.

---

# 🧠 Paradigmas e Conceitos

O projeto utiliza conceitos de diferentes paradigmas de programação.

### Programação Imperativa

Presente principalmente na implementação Legacy, através de alterações diretas no estado.

### Programação Orientada a Objetos

Utilizada na implementação refatorada para representar responsabilidades através de classes e serviços.

### Conceitos Funcionais

São utilizados conceitos como:

- Funções com responsabilidades bem definidas;
- Redução de efeitos colaterais;
- Separação entre transformação de dados e efeitos externos;
- Evitar mutações desnecessárias.

> A aplicação utiliza conceitos funcionais, mas não pretende caracterizar Python ou React como linguagens puramente funcionais.

---

# 🛠️ Tecnologias

### Backend

- Python
- Flask
- Threading

### Frontend

- React
- TypeScript
- Vite

### Conceitos

- Paradigmas de programação
- Arquitetura de software
- Refatoração
- Encapsulamento
- Modularidade
- Concorrência
- Imutabilidade
- Complexidade Big-O
- Débito técnico

---

# 📁 Estrutura do Projeto

```text
shark-academy/
│
├── backend/
│   ├── app.py
│   ├── legacy.py
│   ├── refactored.py
│   ├── concurrency_test.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

# 🚀 Como Executar

## 1. Clonar o repositório

```bash
git clone https://github.com/sergioxv2006/shark-academy.git
```

```bash
cd shark-academy
```

---

## 2. Executar o Backend

```bash
cd backend
```

Criar o ambiente virtual:

```bash
python -m venv venv
```

Ativar no Windows:

```bash
venv\Scripts\activate
```

Instalar as dependências:

```bash
pip install -r requirements.txt
```

Executar:

```bash
python app.py
```

---

## 3. Executar o Frontend

Em outro terminal:

```bash
cd frontend
```

Instalar as dependências:

```bash
npm install
```

Executar:

```bash
npm run dev
```

---

# 🧪 Teste de Concorrência

O backend possui uma demonstração específica para testar duas operações simultâneas.

```bash
python concurrency_test.py
```

Resultado esperado na implementação refatorada:

```text
Estoque inicial: 1
Pedidos simultâneos: 2
Pedidos aprovados: 1
Pedidos rejeitados: 1
Estoque final: 0

✓ Estado consistente
```

---

# 🎯 Objetivo Acadêmico

O projeto busca demonstrar, através de uma aplicação funcional, como escolhas relacionadas aos paradigmas de programação e à arquitetura podem afetar:

- Manutenibilidade;
- Acoplamento;
- Coesão;
- Segurança do estado;
- Concorrência;
- Complexidade;
- Evolução do software;
- Débito técnico.

A comparação entre **Legacy** e **Refatorada** permite visualizar na prática os problemas e as possíveis estratégias utilizadas para mitigá-los.

---

# 👥 Equipe

**Equipe 4 — Shark Academy / Incubadora CRIA**

Projeto desenvolvido para a disciplina de **Paradigmas de Programação**.

---

# 📌 Status

🚧 **Proof of Concept — Em desenvolvimento**

O projeto possui finalidade acadêmica e experimental, não sendo destinado à utilização em ambiente de produção.
