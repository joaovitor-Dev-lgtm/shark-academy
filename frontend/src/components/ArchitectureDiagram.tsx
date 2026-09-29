interface ArchitectureDiagramProps {
  type: "legacy" | "refactored";
}

function ArchitectureDiagram({
  type,
}: ArchitectureDiagramProps) {

  if (type === "legacy") {
    return (
      <div className="architecture-diagram">

        <div className="diagram-node main-node danger-node">
          ESTADO GLOBAL
        </div>

        <div className="diagram-arrow">
          ↓
        </div>

        <div className="diagram-grid">

          <div className="diagram-node">
            PEDIDOS
          </div>

          <div className="diagram-node">
            ESTOQUE
          </div>

          <div className="diagram-node">
            PRODUTOS
          </div>

        </div>

        <div className="diagram-warning">
          ⚠ Componentes compartilham e modificam
          o mesmo estado.
        </div>

      </div>
    );
  }

  return (
    <div className="architecture-diagram">

      <div className="diagram-node main-node success-node">
        API
      </div>

      <div className="diagram-arrow">
        ↓
      </div>

      <div className="diagram-grid">

        <div className="diagram-node">
          PRODUCT
        </div>

        <div className="diagram-node">
          ORDER
        </div>

        <div className="diagram-node">
          INVENTORY
        </div>

      </div>

      <div className="diagram-arrow">
        ↓
      </div>

      <div className="diagram-node event-node">
        DOMAIN EVENTS
      </div>

      <div className="diagram-success">
        ✓ Responsabilidades isoladas
      </div>

    </div>
  );
}

export default ArchitectureDiagram;