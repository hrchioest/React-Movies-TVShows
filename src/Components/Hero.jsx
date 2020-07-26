import React from 'react';
import '../Style/Hero.scss';
import foto from '../images/charlize.jpeg';

const Hero = () =>{
    return(
        <div className="hero-container">
            <div className="black-gradient"></div>
            <div className="hero-movie" style={{
                backgroundImage: `url(${foto})`
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