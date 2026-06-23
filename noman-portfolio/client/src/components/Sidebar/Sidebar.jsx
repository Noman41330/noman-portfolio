import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { portfolioRoutes } from "../../routes/portfolioRoutes";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
        <Menu size={28} />
      </button>

      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          <X size={24} />
        </button>

        <h2>Noman Portfolio</h2>

        <div className="sidebar-menu">
          {portfolioRoutes.map((item) => {
            const Icon = item.icon;

            return (
              <RouterLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
              >
                <Icon size={20} />
                {item.title}
              </RouterLink>
            );
          })}
        </div>
      </aside>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </>
  );
}