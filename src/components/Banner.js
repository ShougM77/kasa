import React from 'react';
import './Banner.scss';

function Banner({ imageSrc, title }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageSrc})` }}>
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}

export default Banner;
