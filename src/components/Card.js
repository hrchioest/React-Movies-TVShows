import React from "react";

const Card = ({ result }) => {
  return (
    <div id='card'>
      <img alt="foto" src={result.poster_path}/>
      <h3 className='card-title'>{result.title}</h3>
    </div>
  );
};

export default Card;
