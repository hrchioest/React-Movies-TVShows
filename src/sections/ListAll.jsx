import React from 'react';
import {useParams} from "react-router-dom";
  
import ListCard from './ListCard'
import { movieTrending, trendingTv, moviePopular, movieTopRated, movieUpcoming, movieNow, tvPopular, tvTopRated, tvNow} from "../service/index";

const sections = {
    movie: {
        api:movieTrending,
        title: "Películas que son tendencia",
        type:"movie"
    },
    tv: {
        api:trendingTv,
        title: "Series que son tendencia",
        type:"tv"
    },
    moviePopular:{
        api:moviePopular,
        title:"Películas populares",
        type:"movie"
    },
    movieTopRated:{
        api:movieTopRated,
        title: "Peliculas con mejores críticas",
        type:"movie"
    },
    movieUpcoming:{
        api:movieUpcoming,
        title: "Películas a estrenarse",
        type:"movie"
    },
    movieNow:{
        api:movieNow,
        title:"Películas en cines",
        type:"movie"
    },
    tvPopular:{
        api:tvPopular,
        title:"Series populares",
        type:"tv"
    },
    tvTopRated:{
        api:tvTopRated,
        title:"Series con más críticas",
        type:"tv"
    },
    tvNow:{
        api:tvNow,
        title:"Series al aire",
        type:"tv"
    }
}

const ListAll = () =>{

    const { seccion } = useParams();

    return(
        <>  
            <ListCard title={sections[seccion].title} api={sections[seccion].api} type={sections[seccion].type} />
            
        </>

    )
}

export default ListAll;