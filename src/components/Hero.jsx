import React from "react";
import "../sass/components/hero.scss";


const Hero = ({img}) => {
  //const { match } = props;

  return (
    <div className='hero-container'>
      <div className='black-gradient'></div>
      <div className='hero-movie'>
        <img src={"https://image.tmdb.org/t/p/original//" + img} alt="background"/>
      </div>
    </div>
  );
};

export default Hero;