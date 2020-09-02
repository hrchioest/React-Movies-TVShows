import React, { useParams } from 'react';
import "../sass/components/menuHero.scss";
import MovieInfo from "./MovieInfo";
import Video from "./Video";
import Similar from "./Similar";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';

const MenuHero = ({id}) =>{

//    const { match } = props;
  //  const movieId = match.params.id;

  //let { id } = useParams();

  useEffect(() => console.log(), []);

    return(
        <Router>
            <div className="menu-container">
                <NavLink to={`/${id}/info`} activeClassName="selected" className="tab info">
                    INFO
                </NavLink>
                <NavLink to="/videos" activeClassName="selected" className="tab vid">
                    VIDEOS
                </NavLink>
                <NavLink to="/similar" activeClassName="selected" className="tab similar">
                    SIMILARES
                </NavLink>
                <Switch>
                    <Route path={`${id}/info`} component={MovieInfo} />
                    <Route path="/videos" component={Video} />
                    <Route path="/similar" component={Similar} />
                </Switch>
            </div>
        </Router>
    )
}

export default MenuHero;