import React, { useState, useEffect } from "react";
import "../sass/components/containerInfo.scss";
import MovieInfo from "./MovieInfo";
import Video from "./Video";
import Hero from "./Hero";
import TvInfo from "./TvInfo";
import ListCast from "../sections/ListCast";
import Similar from "../components/Similar";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import { useParams } from "react-router-dom";
import { info } from "../service/index";

const ContainerInfo = () => {
  const { path, url } = useRouteMatch();
  const { id, type } = useParams();

  const [information, setInformation] = useState([]);
  useEffect(() => {
    axios
      .get(info.replace("[id]", id).replace("[type]", type))
      .then((res) => {
        setInformation(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Hero background={information.backdrop_path} />

      <Router>
        <div className='info-container'>
          <div className='menu-info-details'>
            <NavLink
              to={`${url}/info`}
              exact
              activeClassName='selected'
              className='tab info'
            >
              INFO
            </NavLink>
            <NavLink
              to={`${url}/reparto`}
              activeClassName='selected'
              className='tab vid'
            >
              REPARTO
            </NavLink>
            {type === "movie" ? (
              <NavLink
                to={`${url}/videos`}
                exact
                activeClassName='selected'
                className='tab vid'
              >
                VIDEOS
              </NavLink>
            ) : (
              <NavLink
                to={`${url}/episodios`}
                exact
                activeClassName='selected'
                className='tab vid'
              >
                EPISODIOS
              </NavLink>
            )}
            <NavLink
              to={`${url}/similares`}
              exact
              activeClassName='selected'
              className='tab similar'
            >
              SIMILARES
            </NavLink>
          </div>

          <Switch>
            <Route path='/videos' component={Video} />
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
            <Route path={`${path}/reparto`}>
              <ListCast id={id} type={type} />
            </Route>
            <Route path={`${path}/similares`}>
              <Similar id={id} type={type} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default ContainerInfo;
