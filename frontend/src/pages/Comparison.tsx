function Comparison() {

  const rows = [
    [
      "Estado global",
      "Alto",
      "Reduzido",
    ],
    [
      "Acoplamento",
      "Alto",
      "Reduzido",
    ],
    [
      "Encapsulamento",
      "Baixo",
      "Maior",
    ],
    [
      "Efeitos colaterais",
      "Alto",
      "Controlados",
    ],
    [
      "Concorrência",
      "Vulnerável",
      "Controlada",
    ],
    [
      "Modularidade",
      "Baixa",
      "Maior",
    ],
    [
      "Testabilidade",
      "Baixa",
      "Maior",
    ],
  ];

  return (
    <div className="page">

      <section className="page-title">

        <span className="eyebrow">
          05 / RESULTADO
        </span>

        <h2>
          Comparação
        </h2>

        <p>
          Características observáveis nas duas abordagens
          arquiteturais.
        </p>

      </section>


      <section className="comparison-card">

        <div className="comparison-header">

          <div>
            Característica
          </div>

          <div className="danger-text">
            LEGACY
          </div>

          <div className="success-text">
            REFACTORED
          </div>

        </div>


        {rows.map((row) => (

          <div
            className="comparison-row"
            key={row[0]}
          >

            <div>
              {row[0]}
            </div>

            <div className="danger-cell">
              {row[1]}
            </div>

            <div className="success-cell">
              {row[2]}
            </div>

          </div>

        ))}

      </section>


      <section className="conclusion-card">

        <span className="eyebrow">
          CONCLUSÃO DA PoC
        </span>

        <h3>
          Problema → Refatoração → Demonstração
        </h3>

        <p>
          A PoC demonstra como o isolamento de responsabilidades,
          o encapsulamento e o controle do acesso ao estado podem
          reduzir determinados efeitos colaterais e problemas de
          concorrência presentes na implementação inicial.
        </p>

      </section>

    </div>
  );
}

export default Comparison;