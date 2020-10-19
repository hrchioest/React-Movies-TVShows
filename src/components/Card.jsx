import React from "react";
import "../sass/components/card.scss";
import imageNotSupported from "../images/imgNotSupport.svg";
import { Link } from "react-router-dom";

const Card = ({ id, title, image, type }) => {
  return (
    <div id='card'>
      <div className='img-card'>
        <Link to={`/${type}/${id}/info`}>
          {image ? (
            <img
              src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + image}
              alt='poster'
            />
          ) : (
            <img className='img-not-support' src={imageNotSupported} alt="imagen-not-supported"/>
          )}
        </Link>
      </div>
      <h3 className='card-title'>{title}</h3>
    </div>
  );
};

export default Card;
