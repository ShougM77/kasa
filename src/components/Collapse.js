import React, { useState } from 'react';
import './Collapse.scss';
import icon from "../images/icon-fermer.png";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={toggleCollapse}>
        {title}
        <img
          src={icon}
          className={`collapse-icon ${isOpen ? "rotated" : ""}`}
          alt="collapse icon"
        />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
