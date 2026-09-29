import { useState } from "react";

const paradigms = [
  {
    id: "encapsulation",
    icon: "🔒",
    title: "Encapsulamento",
    description:
      "Controlar o acesso aos dados e manter as regras próximas da responsabilidade que as possui.",
    legacy:
      'state["products"][1]["stock"] -= quantity',
    refactored:
      "inventory.reserveStock(productId, quantity)",
  },
  {
    id: "immutability",
    icon: "🧊",
    title: "Imutabilidade",
    description:
      "Reduzir mutações diretas e efeitos colaterais através de transformações controladas.",
    legacy:
      'product["stock"] -= quantity',
    refactored:
      "newStock = product.stock - quantity",
  },
  {
    id: "concurrency",
    icon: "⚡",
    title: "Concorrência",
    description:
      "Controlar operações simultâneas sobre recursos compartilhados.",
    legacy:
      "read → wait → write",
    refactored:
      "reserveStock() → controlled access",
  },
  {
    id: "modularity",
    icon: "📦",
    title: "Modularidade",
    description:
      "Separar responsabilidades para reduzir dependências entre componentes.",
    legacy:
      "Order → Global State",
    refactored:
      "Order → Inventory",
  },
  {
    id: "big-o",
    icon: "📈",
    title: "Big-O",
    description:
      "Analisar a eficiência das operações e estruturas de dados.",
    legacy:
      "Busca linear → O(n)",
    refactored:
      "Hash Map → O(1) médio",
  },
  {
    id: "refactoring",
    icon: "🔧",
    title: "Refatoração",
    description:
      "Melhorar a estrutura interna do código sem alterar seu objetivo funcional.",
    legacy:
      "Responsabilidades misturadas",
    refactored:
      "Responsabilidades separadas",
  },
];

function Paradigms() {

  const [selected, setSelected] =
    useState(paradigms[0]);

  return (
    <div className="page">

      <section className="page-title">

        <span className="eyebrow">
          04 / PONTE TÉCNICA
        </span>

        <h2>
          Paradigmas aplicados
        </h2>

        <p>
          Onde os conceitos estudados aparecem na implementação
          da PoC?
        </p>

      </section>


      <section className="paradigm-layout">

        <div className="paradigm-grid">

          {paradigms.map((paradigm) => (

            <button
              key={paradigm.id}
              className={`paradigm-card ${
                selected.id === paradigm.id
                  ? "selected"
                  : ""
              }`}
              onClick={() => setSelected(paradigm)}
            >

              <span className="paradigm-icon">
                {paradigm.icon}
              </span>

              <strong>
                {paradigm.title}
              </strong>

              <span>
                Ver exemplo →
              </span>

            </button>

          ))}

        </div>


        <div className="paradigm-detail">

          <div className="detail-icon">
            {selected.icon}
          </div>

          <span className="eyebrow">
            CONCEITO
          </span>

          <h3>
            {selected.title}
          </h3>

          <p>
            {selected.description}
          </p>


          <div className="code-comparison">

            <div className="code-block danger-code">

              <span>
                LEGACY
              </span>

              <pre>
                {selected.legacy}
              </pre>

            </div>


            <div className="code-block success-code">

              <span>
                REFACTORED
              </span>

              <pre>
                {selected.refactored}
              </pre>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Paradigms;