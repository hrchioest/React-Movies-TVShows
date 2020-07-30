import React from "react";

import Temporada from "../Components/Temporada";
import "../sass/sections/temporadas.scss";

const Temporadas = () => {
  return (
    <div className='temporadas'>
      <div className='group-select'>
        <select className='temp-select'>
          <option value='opcion1'>Temporada 0</option>
          <option value='opcion2'>Temporada 1</option>
        </select>
      </div>
      <div className='group-temp'>
        <Temporada />
        <Temporada />
        <Temporada />
        <Temporada />
        <Temporada />
      </div>
    </div>
  );
};

export default Temporadas;
