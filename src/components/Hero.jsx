import React from "react";
import "../sass/components/hero.scss";

const Hero = () => {

  const imageURL  =  "https://image.tmdb.org/t/p/original";

  return (
      <div className='hero-container'>
      <div className='black-gradient'></div>
        <div className='hero-movie'
          style={{
            backgroundImage: `url(${imageURL})`
          }}>     
        </div>
      </div>
  )
};

export default Hero;