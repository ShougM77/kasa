import React from 'react';
import './Banner.scss';

function Banner({ title, image }) {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="banner-title">{title}</h1>
    </div>
  );
}

export default Banner;
