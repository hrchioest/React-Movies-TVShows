import React from "react";
import ListCard from "./ListCard";
import {
  moviePopular,
  movieUpcoming,
  movieTopRated,
  movieNow
} from "../service/index";

const Movie = () => {
  return (
    <>
      <ListCard
        title='Películas populares'
        limit={5}
        api={moviePopular}
        type='movie'
        link='/moviePopular/trending/page/1'
      />
      <ListCard
        title='Peliculas con mejores críticas'
        limit={5}
        api={movieTopRated}
        type='movie'
        link='/movieTopRated/trending/page/1'
      />
      <ListCard
        title='Películas a estrenarse'
        limit={5}
        api={movieUpcoming}
        type='movie'
        link='/movieUpcoming/trending/page/1'
      />
      <ListCard
        title='Películas en cines'
        limit={5}
        api={movieNow}
        type='movie'
        link='/movieNow/trending/page/1'
      />
    </>
  );
};

export default Movie;
