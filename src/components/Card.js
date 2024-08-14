import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ property }) {
  return (
    <div className="card">
      <Link to={`/property/${property.id}`}>
        <div>
          <img src={property.cover} alt={property.title} className="card-image" />
        </div>
        <div className="card-content">
          <h2 className="card-title">{property.title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
