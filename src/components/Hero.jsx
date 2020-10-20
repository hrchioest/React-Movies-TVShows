import React from "react";
import "../sass/components/hero.scss";

const Hero = ({ background }) => {
  return (
    <div className='hero-container'>
      <div className='black-gradient'></div>
      <div
        className='hero-movie'
        style={{
          backgroundImage: `url(${
            "https://image.tmdb.org/t/p/original" + background
          })`
        }}
      ></div>
    </div>
  );
};

export default Hero;
