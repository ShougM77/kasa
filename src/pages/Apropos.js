import React from 'react';
import Collapse from '../components/Collapse';
import Header from '../components/Layout/Header';
import Banner from '../components/Banner';
import './Apropos.scss';
import montagne from '../images/montagne.png';
import Footer from "../components/Layout/Footer";

function Apropos() {
  return (
    <>
      <Header />
      <div className="apropos">
        <Banner imageSrc={montagne} text="" className="banner-apropos" />
        <section className="collapses-container">
          <Collapse title="Fiabilité">
            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </Collapse>
          <Collapse title="Respect">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </Collapse>
          <Collapse title="Service">
            <p>Nous nous engageons à offrir un service de qualité. Nos équipes sont disponibles pour aider les hôtes et les voyageurs, veillant à ce que toutes les attentes soient satisfaites.</p>
          </Collapse>
          <Collapse title="Sécurité">
            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
          </Collapse>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Apropos;
