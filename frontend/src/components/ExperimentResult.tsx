interface ExperimentResultProps {
  architecture: "legacy" | "refactored";
  executed: boolean;
}

function ExperimentResult({
  architecture,
  executed,
}: ExperimentResultProps) {

  if (!executed) {
    return (
      <div className="empty-result">
        <div className="empty-icon">⚡</div>

        <h3>Experimento não executado</h3>

        <p>
          Execute o teste para observar o comportamento
          da arquitetura selecionada.
        </p>
      </div>
    );
  }

  const isLegacy = architecture === "legacy";

  return (
    <div
      className={`experiment-result ${
        isLegacy ? "result-danger" : "result-success"
      }`}
    >

      <div className="result-header">

        <div>
          <span className="result-label">
            RESULTADO
          </span>

          <h3>
            {isLegacy
              ? "Inconsistência detectada"
              : "Estado consistente"}
          </h3>
        </div>

        <div className="result-icon">
          {isLegacy ? "!" : "✓"}
        </div>

      </div>

      <div className="result-grid">

        <div>
          <span>Estoque inicial</span>
          <strong>1</strong>
        </div>

        <div>
          <span>Pedidos simultâneos</span>
          <strong>2</strong>
        </div>

        <div>
          <span>Pedidos aprovados</span>
          <strong>
            {isLegacy ? "2" : "1"}
          </strong>
        </div>

        <div>
          <span>Pedidos rejeitados</span>
          <strong>
            {isLegacy ? "0" : "1"}
          </strong>
        </div>

        <div>
          <span>Estoque final</span>
          <strong>0</strong>
        </div>

      </div>

      <div className="result-explanation">

        {isLegacy ? (
          <>
            <strong>Problema identificado</strong>

            <p>
              Duas operações conseguiram observar o mesmo
              estoque disponível e foram aprovadas.
            </p>

            <small>
              Estado compartilhado + ausência de controle
              adequado da concorrência.
            </small>
          </>
        ) : (
          <>
            <strong>Solução aplicada</strong>

            <p>
              Apenas uma operação conseguiu reservar
              a unidade disponível.
            </p>

            <small>
              O estoque possui responsabilidade própria
              e controla sua atualização.
            </small>
          </>
        )}

      </div>

    </div>
  );
}

export default ExperimentResult;