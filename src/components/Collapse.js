import React, { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button className="collapse-button" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
