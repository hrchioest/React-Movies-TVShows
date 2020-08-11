import React from 'react';
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../sass/sections/main-pages.scss";

const Tv = () => {
    return (
        <section id="main-page">
            <div className='list-main-page'>
                <a href='#'>
                    <h2>
                        Series populares
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
                        Series con mejores críticas
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
                        Series al aire
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

export default Tv;