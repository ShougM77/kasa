import React, { useState } from 'react';
import './Collapse.scss';
import arrowClosed from "../images/icon-fermer.png";
import arrowOpen from "../images/icon-ouvert.png";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          src={isOpen ? arrowOpen : arrowClosed}
          alt="Toggle Icon"
          className="collapse-icon"
        />
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
