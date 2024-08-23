import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '../datas/logements.json';
import Collapse from '../components/Collapse';
import Footer from "../components/Layout/Footer";
import Header from '../components/Layout/Header';
import Slideshow from "../components/Slideshow";
import Etoile from "../images/Etoile.png";
import EtoileVide from "../images/EtoileVide.png";
import Tag from '../components/Tag';
import './Property.scss';

function Property() {
  const { id } = useParams();
  const property = data.find((p) => p.id === id);

  if (!property) return <Navigate to="/404" />;

  // Déstructuration des données
  const {
    pictures,
    rating,
    tags,
    description,
    equipments,
    title,
    location,
    host: { name, picture },
  } = property;

  //nom de l'hôte
  const [firstName, lastName] = name.split(" ");

  //tags
  const tagsLogement = tags.map((tag, index) => (
    <Tag key={index} nom={tag} />
  ));

  //notation
  const noteLogement = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      className="property-etoile"
      src={index < rating ? Etoile : EtoileVide}
      alt={`Étoile ${index + 1}`}
    />
  ));

  //équipements
  const equipementsLogement = equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));

  return (
    <>
      <Header />
      <main className="property-main">
        <Slideshow images={pictures} />
        <section className="property-header">
          <div className="property-info">
            <h1 className="property-title">{title}</h1>
            <p className="property-location">{location}</p>
            <div className="property-tags">
              {tagsLogement}
            </div>
          </div>
          <div className="property-hote-info">
            <div className="property-hote-name-info">
              <div className="name">
              <p>{firstName}</p>
              <p>{lastName}</p>
              </div>
              <img src={picture} alt={`${firstName} ${lastName}`} className="property-host-picture" />
            </div>
            <div className="property-rating">
              {noteLogement}
            </div>
          </div>
        </section>
        <section className="property-collapse">
          <Collapse title="Description" className="collapseP">
            <p>{description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul className="property-equipments-content">
              {equipementsLogement}
            </ul>
          </Collapse>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Property;
