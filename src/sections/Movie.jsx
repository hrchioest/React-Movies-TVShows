import React from 'react';
import Card from "../components/Card";
import "../sass/sections/Main-pages.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Movie = () => {
    return (
        <section id="main-page">
            <div className='list-main-page'>
                <a href='#'>
                    <h2>
                        Películas populares
              <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
                    </h2>
                </a>
                <div className='card-list-container'>
                    <Card />
                </div>
            </div>

            <div className='list-main-page'>
                <a href='#'>
                    <h2>
                        Películas con mejores críticas
              <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
                    </h2>
                </a>
                <div className='card-list-container'>
                    <Card />
                </div>
            </div>

            <div className='list-main-page'>
                <a href='#'>
                    <h2>
                        Películas a estrenarse
              <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
                    </h2>
                </a>
                <div className='card-list-container'>
                    <Card />
                </div>
            </div>

            <div className='list-main-page'>
                <a href='#'>
                    <h2>
                        Películas en cines
              <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
                    </h2>
                </a>
                <div className='card-list-container'>
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Movie;