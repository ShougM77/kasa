import React, { useState } from 'react';
import './Gallery.scss';

function Gallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 1) return <img src={images[0]} alt="Gallery" />;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
      <button onClick={prevImage}>Précédent</button>
      <img src={images[currentIndex]} alt="Gallery" />
      <button onClick={nextImage}>Suivant</button>
    </div>
  );
}

export default Gallery;
