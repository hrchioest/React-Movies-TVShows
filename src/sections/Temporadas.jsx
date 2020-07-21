import React from "react";
import "../components/Temporada";
import Temporada from "../components/Temporada";
import "./temporadas.scss";

const Temporadas = () => {
  return (
    <div className='temporadas'>
      <select className='select-temp'>
        <option value='opcion1'>Temporada 0</option>
        <option value='opcion2'>Temporada 1</option>
      </select>
      <div className='wrapper-group-temp'>
        <div className='group-temp'>
          <Temporada />
          <Temporada />
          <Temporada />
          <Temporada />
          <Temporada />
        </div>
      </div>
    </div>
  );
};

export default Temporadas;
