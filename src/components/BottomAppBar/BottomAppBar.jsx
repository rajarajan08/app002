import React from "react";

const BottomAppBar = ({ onNavClick }) => {
  const navItems = [
    { name: "Home", icon: "🏠" },
    { name: "Hotels", icon: "🏨" },
    { name: "Cart", icon: "🛒" },
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <div
          key={item.name}
          className="nav-item"
          onClick={() => onNavClick(item.name)}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default BottomAppBar;
