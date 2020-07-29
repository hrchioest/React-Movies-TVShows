import React from "react";
import img from "../images/img_tem.jpg";
import "../sass/components/temporada.scss";

const Temporada = () => {
  return (
    <div className='temporada'>
      <div className='img'>
        <img src={img} />
      </div>
      <div className='titles'>
        <p className='episodio'>EP01</p>
        <h4 className='title'>La recompensa</h4>
      </div>
      <p className='paragraph'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, culpa?
        Assumenda, at iste suscipit exercitationem libero odio a excepturi?
        Dolorum assumenda inventore vel, temporibus quisquam sit modi veniam rem
        omnis?
      </p>
    </div>
  );
};

export default Temporada;
