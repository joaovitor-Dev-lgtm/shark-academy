import type { Page } from "../App";

import MetricCard from "../components/MetricCard";
import ArchitectureDiagram from "../components/ArchitectureDiagram";

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

function Dashboard({
  onNavigate,
}: DashboardProps) {

  return (
    <div className="page">

      <section className="hero">

        <div className="hero-content">

          <span className="eyebrow">
            PROOF OF CONCEPT
          </span>

          <h2>
            Do estado global
            <br />
            à arquitetura modular.
          </h2>

          <p>
            Uma demonstração prática de como decisões
            arquiteturais e paradigmas de programação
            podem influenciar a evolução de uma aplicação.
          </p>

          <button
            className="primary-button"
            onClick={() => onNavigate("experiment")}
          >
            Executar experimento →
          </button>

        </div>

        <div className="hero-visual">
          <div className="hero-shark">🦈</div>
          <div className="hero-ring" />
        </div>

      </section>


      <section className="section">

        <div className="section-header">

          <div>
            <span className="eyebrow">
              VISÃO GERAL
            </span>

            <h3>
              O que estamos demonstrando?
            </h3>
          </div>

        </div>


        <div className="metrics-grid">

          <MetricCard
            title="Problema"
            value="Estado Global"
            description="Compartilhamento excessivo de estado"
            variant="danger"
          />

          <MetricCard
            title="Experimento"
            value="Concorrência"
            description="Duas operações simultâneas"
          />

          <MetricCard
            title="Solução"
            value="Modularidade"
            description="Responsabilidades isoladas"
            variant="success"
          />

        </div>

      </section>


      <section className="section">

        <div className="section-header">

          <div>
            <span className="eyebrow">
              EVOLUÇÃO
            </span>

            <h3>
              Antes e depois
            </h3>
          </div>

        </div>


        <div className="architecture-columns">

          <div className="architecture-card danger-border">

            <div className="card-label danger-text">
              LEGACY
            </div>

            <h4>
              Estado compartilhado
            </h4>

            <ArchitectureDiagram
              type="legacy"
            />

          </div>


          <div className="architecture-card success-border">

            <div className="card-label success-text">
              REFACTORED
            </div>

            <h4>
              Arquitetura modular
            </h4>

            <ArchitectureDiagram
              type="refactored"
            />

          </div>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;