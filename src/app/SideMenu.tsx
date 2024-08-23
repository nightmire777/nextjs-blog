import { useState } from "react";
import "./sidebar.css";
import { FaHome, FaInfoCircle, FaConciergeBell, FaEnvelope } from "react-icons/fa";

// Define the types for your navigation items
const navItems: string[] = ["home", "about", "services", "contact"];

// Define the icons with proper typing
const icons: { [key: string]: JSX.Element } = {
  home: <FaHome size={20} />,
  about: <FaInfoCircle size={20} />,
  services: <FaConciergeBell size={20} />,
  contact: <FaEnvelope size={20} />,
};

export const SideMenu = () => {
  const [active, setActive] = useState<number>(1);

  const goto = (index: number) => setActive(index);

  return (
    <aside className="sidebar">
      <div className="inner">
        <div className="header">
          <img src="/logo.jpg" alt="Logo" className="logo" />
          <h1>MetaPay</h1>
        </div>
        <nav
          className="menu"
          style={{
            "--top": `${active === 0 ? 0 : active * 56}px`,
          } as any}
        >
          {navItems.map((item, index) => (
            <button
              className={active === index ? "active" : ""}
              key={item}
              onClick={() => goto(index)}
            >
              {icons[item] || <span>{item}</span>} {/* Fallback to text if no icon */}
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};
