import React from 'react';
import Card from '../components/Card';
import data from '../data/logements.json';
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";

function Home() {
  return (
    <>
    <Header />
    <main>
    <Banner imageSrc={bannerImg} text="Chez vous, partout et ailleurs" />
      <section>
        {data.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </section>
    </main>
    <Footer />
    </>
  );
}

export default Home;
