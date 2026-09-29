import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Problem from "./pages/Problem";
import Experiment from "./pages/Experiment";
import Solution from "./pages/Solution";
import Paradigms from "./pages/Paradigms";
import Comparison from "./pages/Comparison";

import "./index.css";

export type Page =
  | "dashboard"
  | "problem"
  | "experiment"
  | "solution"
  | "paradigms"
  | "comparison";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("dashboard");

  function renderPage() {
    switch (currentPage) {
      case "dashboard":
        return <Dashboard onNavigate={setCurrentPage} />;

      case "problem":
        return <Problem />;

      case "experiment":
        return <Experiment />;

      case "solution":
        return <Solution />;

      case "paradigms":
        return <Paradigms />;

      case "comparison":
        return <Comparison />;

      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  }

  return (
    <div className="app">
      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <main className="main">
        <Header />

        <div className="content">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}

export default App;