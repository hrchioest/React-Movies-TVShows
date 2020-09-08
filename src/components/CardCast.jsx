import React from 'react';
import foto from '../images/cast.jpg';

const CardCast = () =>{
    return(
        <div>
            <div id="cast-card">
                <img alt="casting" src={foto}/>
            </div>
            <h3 className="act">Charlize Theron</h3>
            <h4 className="character">Andy</h4>
        </div>
    )
}

export default CardCast;