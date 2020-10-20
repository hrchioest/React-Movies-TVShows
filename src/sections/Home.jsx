import React from "react";
import { movieTrending, trendingTv } from "../service/index";
import ListCard from "./ListCard";

const Home = () => {
  return (
    <>
      <ListCard
        title='Películas que son tendencia'
        type='movie'
        limit={5}
        api={movieTrending}
        currentPage={1}
        link='/movie/trending/page/1'
      />
      <ListCard
        title='Series que son tendencia'
        type='tv'
        limit={5}
        api={trendingTv}
        currentPage={1}
        link='/tv/trending/page/1'
      />
    </>
  );
};

export default Home;
