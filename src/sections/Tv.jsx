import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from "../components/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../sass/sections/main-pages.scss";
import { tvPopular, tvTopRated, tvNow } from "../service/index";

const Tv = () => {

    const [popularTv, setPopularTv] = useState([]);
    const [topTv, setTopTv] = useState([]);
    const [nowTv, setNowTv] = useState([]);

   useEffect(() => {
    axios.get(tvPopular)
        .then(res => {
            setPopularTv(res.data.results);
        }).catch(error => console.log(error))
},
    []
);

useEffect(() => {
    axios.get(tvTopRated)
        .then(res => {
            setTopTv(res.data.results);
        }).catch(error => console.log(error))
},
    []
);

useEffect(() => {
    axios.get(tvNow)
        .then(res => {
            setNowTv(res.data.results);
        }).catch(error => console.log(error))
},
    []
);

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
                    
                {popularTv.map((tv, i) => {
                        if (i < 5) {
                            return (
                                <Card key={i} image={tv.poster_path} title={tv.name} />
                            )
                        }
                    })
                    }

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
                    
                {topTv.map((tv, i) => {
                        if (i < 5) {
                            return (
                                <Card key={i} image={tv.poster_path} title={tv.name} />
                            )
                        }
                    })
                    }
                    
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
                    
                {nowTv.map((tv, i) => {
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
}

export default Tv;