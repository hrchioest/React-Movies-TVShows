import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import axios from "axios";
import "../sass/sections/main-pages.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { movieTrending, trendingTv } from "../service/index";


const Home = () => {

  const [trendMovies, setTrendMovies] = useState([]);
  const [trendTv, setTrendTv] = useState([]);

  useEffect(() => {
    axios.get(movieTrending)
      .then(res => {
        setTrendMovies(res.data.results);
      }).catch(error => console.log(error))
  },
    []
  );

  useEffect(() => {
    axios.get(trendingTv)
      .then(res => {
        setTrendTv(res.data.results);
      }).catch(error => console.log(error))
  },
    []
  );

  return (
    <section id="main-page">
      <div className='list-main-page'>
        <a href='#'>
          <h2>
            Películas que son tendencia
            <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
          </h2>
        </a>
        <div className='card-list-container'>

          {trendMovies.map((movie, i) => {
            if (i < 5) {
              return (
                <Card key={i} image={movie.poster_path} title={movie.title} />
              )
            }
          })
          }

        </div>
      </div>

      <div className='list-main-page'>
        <a href='#'>
          <h2>
            Series que son tendencia
            <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
          </h2>
        </a>
        <div className='card-list-container'>

          {trendTv.map((tv, i) => {
            if (i < 5) {
              return (
                <Card key={i} image={tv.poster_path} title={tv.name} />
              )
            }
          })
          }
        </div>

      </div>
    </section>
  )
};

export default Home;

