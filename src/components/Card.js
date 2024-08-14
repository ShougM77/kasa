import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ property }) {
  return (
    <div className="card">
      <img src={property.cover} alt={property.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{property.title}</h2>
        <p className="card-location">{property.location}</p>
        <Link to={`/property/${property.id}`}>Voir plus</Link>
      </div>
    </div>
  );
}

export default Card;
