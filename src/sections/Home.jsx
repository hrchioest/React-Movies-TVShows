import React from 'react';
import { movieTrending, trendingTv } from "../service/index";
import ListCard from "./ListCard";
  
const Home = () => {


  return (
    <>
      <ListCard title="Películas que son tendencia" limit={5} api={movieTrending} link ="/movie/trending" />
      <ListCard title="Series que son tendencia" limit={5} api={trendingTv} link ="/tv/trending"/>
    </>
  )
}

export default Home;

