import React from 'react';
import {useParams} from "react-router-dom";
import ListCard from './ListCard';
import { movieTrending, trendingTv, moviePopular, movieTopRated, movieUpcoming, movieNow, tvPopular, tvTopRated, tvNow} from "../service/index";

const sections = {
    movie: {
        api:movieTrending,
        title: "Películas que son tendencia"
    },
    tv: {
        api:trendingTv,
        title: "Series que son tendencia" 
    },
    moviePopular:{
        api:moviePopular,
        title:"Películas populares"
    },
    movieTopRated:{
        api:movieTopRated,
        title: "Peliculas con mejores críticas"
    },
    movieUpcoming:{
        api:movieUpcoming,
        title: "Películas a estrenarse"
    },
    movieNow:{
        api:movieNow,
        title:"Películas en cines"
    },
    tvPopular:{
        api:tvPopular,
        title:"Series populares"
    },
    tvTopRated:{
        api:tvTopRated,
        title:"Series con más críticas"
    },
    tvNow:{
        api:tvNow,
        title:"Series al aire"
    }
}

const ListAll = () =>{

    const { seccion } = useParams();

    return(
        <>  
            <ListCard title={sections[seccion].title} api={sections[seccion].api} />
            
        </>

    )
}

export default ListAll;