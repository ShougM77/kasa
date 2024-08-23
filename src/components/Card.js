import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ property }) {
  return (
    <div className="card">
      <Link to={`/property/${property.id}`} className="card-link">
        <div className="img-container">
          <img src={property.cover} alt={property.title}  />
        </div>
        <div className="card-title">
          <h2>{property.title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default Card;
