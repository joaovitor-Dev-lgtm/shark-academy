import { useState } from "react";

import ExperimentResult from "../components/ExperimentResult";

type Architecture =
  | "legacy"
  | "refactored";

function Experiment() {

  const [architecture, setArchitecture] =
    useState<Architecture>("legacy");

  const [executed, setExecuted] =
    useState(false);

  function executeExperiment() {
    setExecuted(false);

    setTimeout(() => {
      setExecuted(true);
    }, 700);
  }

  return (
    <div className="page">

      <section className="page-title">

        <span className="eyebrow">
          02 / EXPERIMENTO
        </span>

        <h2>
          Teste de concorrência
        </h2>

        <p>
          Duas operações tentam comprar simultaneamente
          um produto que possui apenas uma unidade disponível.
        </p>

      </section>


      <section className="experiment-layout">

        <div className="content-card experiment-config">

          <span className="card-label">
            CENÁRIO
          </span>

          <div className="product-preview">

            <div className="product-icon">
              💻
            </div>

            <div>
              <strong>
                Notebook
              </strong>

              <span>
                R$ 3.500,00
              </span>
            </div>

          </div>


          <div className="stock-display">

            <span>
              Estoque disponível
            </span>

            <strong>
              1
            </strong>

          </div>


          <div className="architecture-selector">

            <span>
              Arquitetura utilizada
            </span>

            <div className="toggle-group">

              <button
                className={
                  architecture === "legacy"
                    ? "toggle active-danger"
                    : "toggle"
                }
                onClick={() => {
                  setArchitecture("legacy");
                  setExecuted(false);
                }}
              >
                Problemática
              </button>

              <button
                className={
                  architecture === "refactored"
                    ? "toggle active-success"
                    : "toggle"
                }
                onClick={() => {
                  setArchitecture("refactored");
                  setExecuted(false);
                }}
              >
                Refatorada
              </button>

            </div>

          </div>


          <div className="customers">

            <div className="customer">
              <span>👤</span>
              Cliente A
              <small>Compra: 1</small>
            </div>

            <div className="vs">
              VS
            </div>

            <div className="customer">
              <span>👤</span>
              Cliente B
              <small>Compra: 1</small>
            </div>

          </div>


          <button
            className="primary-button full-button"
            onClick={executeExperiment}
          >
            ⚡ Executar experimento
          </button>

        </div>


        <div>

          <ExperimentResult
            architecture={architecture}
            executed={executed}
          />

        </div>

      </section>

    </div>
  );
}

export default Experiment;