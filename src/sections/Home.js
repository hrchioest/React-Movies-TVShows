import React from "react";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <section id='home'>
      <div className='list-home'>
        <a href='#'>
          <h2 className='list-home-title'>
            Películas que son tendencia
            <FontAwesomeIcon className='arrow-list-home' icon={faArrowRight} />
          </h2>
        </a>
        <div className='card-list-container'>
          <Card />
        </div>
      </div>

      <div className='list-home'>
        <a href='#'>
          <h2>
            Series que son tendencia
            <FontAwesomeIcon className='arrow-list-home' icon={faArrowRight} />
          </h2>
        </a>
        <div className='card-list-container'>
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Home;
