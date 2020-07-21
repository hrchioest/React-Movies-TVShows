import React from 'react';
import movie from "../movie.jpg";
import "../App.scss";

const Card = () => {
    return (
        <div id="card">
            <div className="img-card">
                <img src={movie} alt="img" />
            </div>
            <h3 className="card-title">Blade Runner</h3>
        </div>
    )
};

export default Card;