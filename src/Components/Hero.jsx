import React from 'react';
import '../Sass/components/Hero.scss';
import poster from '../images/charlize.jpeg';

const Hero = () =>{
    return(
        <div className="hero-container">
            <div className="black-gradient"></div>
            <div className="hero-movie" style={{
                backgroundImage: `url(${poster})`
            }}>
            </div>
        </div>
    )
}

export default Hero;

//MODIFICAR <a>