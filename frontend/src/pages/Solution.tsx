import ArchitectureDiagram from "../components/ArchitectureDiagram";

function Solution() {

  return (
    <div className="page">

      <section className="page-title">

        <span className="eyebrow">
          03 / HIPÓTESE DA SOLUÇÃO
        </span>

        <h2>
          A solução
        </h2>

        <p>
          Substituir o compartilhamento direto de estado por
          componentes com responsabilidades bem definidas.
        </p>

      </section>


      <section className="content-card">

        <ArchitectureDiagram
          type="refactored"
        />

      </section>


      <section className="solution-grid">

        <div className="solution-card">

          <div className="solution-number">
            01
          </div>

          <h3>
            Encapsulamento
          </h3>

          <p>
            O módulo de estoque controla suas próprias regras
            e não expõe diretamente sua estrutura interna.
          </p>

          <code>
            inventory.reserveStock()
          </code>

        </div>


        <div className="solution-card">

          <div className="solution-number">
            02
          </div>

          <h3>
            Modularidade
          </h3>

          <p>
            Product, Order e Inventory possuem responsabilidades
            separadas.
          </p>

          <code>
            Order → Inventory
          </code>

        </div>


        <div className="solution-card">

          <div className="solution-number">
            03
          </div>

          <h3>
            Controle de concorrência
          </h3>

          <p>
            O acesso ao recurso compartilhado é controlado para
            evitar reservas inconsistentes.
          </p>

          <code>
            reserveStock()
          </code>

        </div>


        <div className="solution-card">

          <div className="solution-number">
            04
          </div>

          <h3>
            Menos efeitos colaterais
          </h3>

          <p>
            As regras ficam próximas dos dados e das
            responsabilidades que as controlam.
          </p>

          <code>
            Domain → Service
          </code>

        </div>

      </section>

    </div>
  );
}

export default Solution;