import React from 'react';
import '../sass/components/castCard.scss';
import imgCst from '../images/cast-one.jpg';


const CastCard = () =>{
    return(
        <div className="container-castC">
            <a href="#">
                <div className="cast-imgn">
                    <img alt="charlize theron poster" src={imgCst} className="cst-poster"/>
                </div>
                <h3 className="actorName txt">
                    Charlize Theron
                </h3>
                <h4 className="character txt">
                    Andy
                </h4>
            </a>
        </div>
    )
}

export default CastCard;