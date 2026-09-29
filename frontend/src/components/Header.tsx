function Header() {
  return (
    <header className="header">

      <div>
        <div className="breadcrumb">
          SHARK ACADEMY
          <span>/</span>
          PROOF OF CONCEPT
        </div>

        <p className="header-subtitle">
          Demonstração de arquitetura e paradigmas de programação
        </p>
      </div>

      <div className="header-status">
        <span className="status-dot" />
        Sistema operacional
      </div>

    </header>
  );
}

export default Header;