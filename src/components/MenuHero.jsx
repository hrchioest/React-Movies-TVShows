import React, { useState } from 'react';
import axios from "axios";
import "../sass/components/menuHero.scss";
import MovieInfo from "./MovieInfo";
import Cast from "./Cast";
import Video from "./Video";
import Similar from "./Similar";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

const MenuHero = ({ id }) => {

    //    const { match } = props;
    //  const movieId = match.params.id;

    //let { id } = useParams();

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b28a6d7a756aac4ded04e3b860e94284&language=es`)
            .then(res => {
                setMovieData(res.data);
                console.log(movieData)
            }).catch(error => console.log(error))
    }, []);

    useEffect(() => console.log(movieData), [movieData]);

    return (
        <Router>
            <div className="menu-container">
                <NavLink to={`/${id}/info`} activeClassName="selected" className="tab info">
                    INFO
                </NavLink>
                <NavLink to={`/${id}/reparto`} activeClassName="selected" className="tab vid">
                    REPARTO
                </NavLink>
                <NavLink to={`/${id}/videos`} activeClassName="selected" className="tab vid">
                    VIDEOS
                </NavLink>
                <NavLink to={`/${id}/similar`} activeClassName="selected" className="tab similar">
                    SIMILARES
                </NavLink>
                <Switch>
                    <Route exact path={`/:${id}/info`} component={MovieInfo} id={`${id}`} title={movieData.title} />
                    <Route path={`/:${id}/reparto`} component={Cast} />
                    <Route path={`/:${id}/videos`} component={Video} />
                    <Route path={`/:${id}/similar`} component={Similar} />
                </Switch>
            </div>
        </Router>
    )
}

export default MenuHero;