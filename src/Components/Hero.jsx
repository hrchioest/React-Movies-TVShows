import React from 'react';
import "../Sass/components/Hero.scss";
import poster from '../Images/charlize.jpeg';

const Hero = () =>{
    return(
        <div className="hero-container">
            <div className="black-gradient"></div>
            <div className="hero-movie" style={{
                backgroundImage: `url(${poster})`
            }}>
            </div>
            <div className="menu-hero">
                <a className="font">INFO</a>
                <a className="font">REPARTO</a>
                <a className="font">VIDEOS</a>
                <a className="font">SIMILARES</a>
            </div>
        </div>
    )
}

export default Hero;

//MODIFICAR <a>