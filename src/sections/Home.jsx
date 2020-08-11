import React from 'react';
import Card from "../components/Card";
//import axios from "axios";
import "../sass/sections/main-pages.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Home = props => {
/*  const url =  "https://api.themoviedb.org/3";
  const apiKey = "b28a6d7a756aac4ded04e3b860e94284";

  const [movies, setMovies] = useState([]);
  
  componentDidMount(); {
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=b28a6d7a756aac4ded04e3b860e94284")
      .then(res => {
        console.log(res)
        //const movies = res;
        //setMovies(movies);
      }).catch()
  }


*/
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
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Home;


/*
          {props.movies.map((movie, i) => {
            return (
              <Card key={i} image={movie.poster_path} />
            )})
          }
*/
