import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "../components/Card";
import "../sass/sections/main-pages.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { moviePopular, movieTopRated, movieUpcoming, movieNow } from "../service/index";

const Movie = () => {

    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowMovies, setNowMovies] = useState([]);

    useEffect(() => {
        axios.get(moviePopular)
            .then(res => {
                setPopularMovies(res.data.results);
            }).catch(error => console.log(error))
    },
        []
    );

    useEffect(() => {
        axios.get(movieTopRated)
            .then(res => {
                setTopMovies(res.data.results);
            }).catch(error => console.log(error))
    },
        []
    );

    useEffect(() => {
        axios.get(movieUpcoming)
            .then(res => {
                setUpcomingMovies(res.data.results);
            }).catch(error => console.log(error))
    },
        []
    ); 

    useEffect(() => {
        axios.get(movieNow)
            .then(res => {
                setNowMovies(res.data.results);
            }).catch(error => console.log(error))
    },
        []
    );

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

                    {popularMovies.map((movie, i) => {
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
                        Películas con mejores críticas
              <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
                    </h2>
                </a>
                <div className='card-list-container'>

                    {topMovies.map((movie, i) => {
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
                        Películas a estrenarse
              <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
                    </h2>
                </a>
                <div className='card-list-container'>
                    
                {upcomingMovies.map((movie, i) => {
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
                        Películas en cines
              <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
                    </h2>
                </a>
                <div className='card-list-container'>
                    
                    {nowMovies.map((movie, i) => {
                        if (i < 5) {
                            return (
                                <Card key={i} image={movie.poster_path} title={movie.title} />
                            )
                        }
                    })
                    }
                </div>
            </div>
        </section>
    )
}

export default Movie;