import React from "react";
import "../sass/components/temporada.scss";

const Episodio = ({ image, episodes, name, overview }) => {
  return (
    <div className='temporada'>
      <div className='img'>
        {image ? (
          <img src={"https://image.tmdb.org/t/p/w400//" + image} alt='img' />
        ) : (
          <div className='box-background'>
            <i class='fas fa-image'></i>
          </div>
        )}
      </div>
      <div className='titles'>
        <p className='episodio'>EP0{episodes}</p>
        <h4 className='title'>{name}</h4>
      </div>
      <p className='paragraph'>{overview}</p>
    </div>
  );
};

export default Episodio;
