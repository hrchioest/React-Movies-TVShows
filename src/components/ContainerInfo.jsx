import React, { useState, useEffect } from "react";
import "../sass/components/containerInfo.scss";
import MovieInfo from "./MovieInfo";
import Videos from "../sections/Videos";
import Similar from "./Similar";
import Hero from "./Hero";
import TvInfo from "./TvInfo";
import ListCast from "../sections/ListCast";
import Episodios from "../sections/Episodios";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import { info } from "../service/index";

const ContainerInfo = () => {
  const { path } = useRouteMatch();
  const { id, type } = useParams();

  const [information, setInformation] = useState([]);
  useEffect(() => {
    axios
      .get(info.replace("[id]", id).replace("[type]", type))
      .then((res) => {
        setInformation(res.data);
      })
      .catch((error) => console.log(error));
  }, [id, type]);

  return (
    <>
      <Hero background={information.backdrop_path} />
      <div className='menu-container'>
        <NavLink
          to={`/${type}/${id}/info`}
          exact
          activeClassName='selected'
          className='tab info'
        >
          INFO
        </NavLink>
        <NavLink
          to={`/${type}/${id}/reparto`}
          activeClassName='selected'
          className='tab vid'
        >
          REPARTO
        </NavLink>
        {type === "movie" ? (
          <NavLink
            to={`/movie/${id}/videos`}
            exact
            activeClassName='selected'
            className='tab vid'
          >
            VIDEOS
          </NavLink>
        ) : (
          <NavLink
            to={`/tv/${id}/seasons/1`}
            exact
            activeClassName='selected'
            className='tab vid'
          >
            EPISODIOS
          </NavLink>
        )}

        <NavLink
          to={`/${type}/${id}/similares`}
          exact
          activeClassName='selected'
          className='tab similar'
        >
          SIMILARES
        </NavLink>
      </div>

      <Switch>
        <Route
          exact
          path={`${path}/info`}
          render={() =>
            type === "movie" ? (
              <MovieInfo information={information} />
            ) : (
              <TvInfo information={information} />
            )
          }
        />
        <Route
          exact
          path={`${path}/reparto`}
          render={() => <ListCast id={id} type={type} />}
        />

        <Route
          exact
          path={`/movie/${id}/videos`}
          render={() => <Videos id={id} />}
        />

        <Route
          exact
          path={`${path}/seasons/:temporada`}
          render={() => (
            <Episodios id={id} cantTemp={information.number_of_seasons} />
          )}
        />
        <Route path={`${path}/similares`}>
          <Similar id={id} type={type} />
        </Route>
      </Switch>
    </>
  );
};

export default ContainerInfo;
