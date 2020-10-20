import React from "react";
import imgUser from "../images/user.png";
import "../sass/components/card.scss";


const Cast = ({id, name, image, character}) => {
   
  return (
      <div id='card'>
        <div className='img-card'>
            {image ? <img src={'https://image.tmdb.org/t/p/w370_and_h556_bestv2/' + image} alt="poster"/>:<img className="img-user" src={imgUser} alt="poster"/>}
          
        </div>
        <h3 className='card-title'>{name}</h3>
        <h4 className='card-subtitle'>{character}</h4>
      </div>
    );
};
  
export default Cast;
  
