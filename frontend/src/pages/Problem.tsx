import ArchitectureDiagram from "../components/ArchitectureDiagram";

function Problem() {

  return (
    <div className="page">

      <section className="page-title">

        <span className="eyebrow">
          01 / DIAGNÓSTICO
        </span>

        <h2>
          O problema
        </h2>

        <p>
          Como uma aplicação aparentemente simples pode
          acumular problemas arquiteturais à medida que cresce?
        </p>

      </section>


      <section className="problem-layout">

        <div className="content-card">

          <span className="card-label danger-text">
            ARQUITETURA LEGACY
          </span>

          <h3>
            Estado global compartilhado
          </h3>

          <p>
            Na versão inicial, diferentes partes do sistema
            possuem acesso direto a uma estrutura de estado
            compartilhada.
          </p>

          <p>
            Isso aumenta o acoplamento e faz com que uma
            alteração realizada por um componente possa
            produzir efeitos em outros componentes.
          </p>

          <ArchitectureDiagram
            type="legacy"
          />

        </div>


        <div className="content-card">

          <span className="card-label">
            PROBLEMAS IDENTIFICADOS
          </span>

          <div className="problem-list">

            <div className="problem-item">
              <span>01</span>
              <div>
                <strong>Estado compartilhado</strong>
                <p>
                  Múltiplos componentes dependem da mesma estrutura.
                </p>
              </div>
            </div>

            <div className="problem-item">
              <span>02</span>
              <div>
                <strong>Acoplamento</strong>
                <p>
                  Alterações em uma parte podem afetar outras.
                </p>
              </div>
            </div>

            <div className="problem-item">
              <span>03</span>
              <div>
                <strong>Efeitos colaterais</strong>
                <p>
                  Funções podem modificar dados utilizados por outros módulos.
                </p>
              </div>
            </div>

            <div className="problem-item">
              <span>04</span>
              <div>
                <strong>Concorrência</strong>
                <p>
                  Operações simultâneas podem produzir inconsistências.
                </p>
              </div>
            </div>

            <div className="problem-item">
              <span>05</span>
              <div>
                <strong>Débito técnico</strong>
                <p>
                  O crescimento aumenta a dificuldade de manutenção.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Problem;