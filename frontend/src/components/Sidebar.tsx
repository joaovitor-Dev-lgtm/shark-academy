import type { Page } from "../App";

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const menuItems: {
  id: Page;
  label: string;
  icon: string;
}[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "⌂",
  },
  {
    id: "problem",
    label: "O Problema",
    icon: "⚠",
  },
  {
    id: "experiment",
    label: "Experimento",
    icon: "⚡",
  },
  {
    id: "solution",
    label: "A Solução",
    icon: "✓",
  },
  {
    id: "paradigms",
    label: "Paradigmas",
    icon: "◇",
  },
  {
    id: "comparison",
    label: "Comparação",
    icon: "⇄",
  },
];

function Sidebar({
  currentPage,
  onNavigate,
}: SidebarProps) {
  return (
    <aside className="sidebar">

      <div className="brand">
        <div className="brand-icon">🦈</div>

        <div>
          <h1>SHARK</h1>
          <span>ACADEMY</span>
        </div>
      </div>

      <div className="sidebar-label">
        POCKET PROOF OF CONCEPT
      </div>

      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${
              currentPage === item.id ? "active" : ""
            }`}
            onClick={() => onNavigate(item.id)}
          >
            <span className="nav-icon">
              {item.icon}
            </span>

            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="status-dot" />

        <div>
          <strong>PoC v1.0</strong>
          <span>Arquitetura & Paradigmas</span>
        </div>
      </div>

    </aside>
  );
}

export default Sidebar;