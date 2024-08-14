import React from 'react';
import Card from '../components/Card';
import data from '../data/logements.json';

function Home() {
  return (
    <main>
      <section>
        {data.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </section>
    </main>
  );
}

export default Home;
