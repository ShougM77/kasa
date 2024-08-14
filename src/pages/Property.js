import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '../datas/logements.json';
import Gallery from '../components/Gallery';
import Collapse from '../components/Collapse';
import './Property.scss';

function Property() {
  const { id } = useParams();
  const property = data.find((p) => p.id === id);

  if (!property) return <Navigate to="/404" />;

  return (
    <main>
      <Gallery images={property.pictures} />
      <div>
        <h1>{property.title}</h1>
        <Collapse title="Description" content={property.description} />
        <Collapse title="Équipements" content={property.equipments.join(', ')} />
      </div>
    </main>
  );
}

export default Property;
