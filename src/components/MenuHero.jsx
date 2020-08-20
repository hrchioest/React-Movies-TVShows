import React from 'react';
import "../sass/components/menuHero.scss";
import MovieInfo from "./MovieInfo";
import Video from "./Video";
import Similar from "./Similar";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MenuHero = () =>{
    return(
        <Router>
            <div className="menu-container">
                <NavLink to="/info" exact activeClassName="selected" className="tab info">
                    INFO
                </NavLink>
                <NavLink to="/videos" exact activeClassName="selected" className="tab vid">
                    VIDEOS
                </NavLink>
                <NavLink to="/similar" exact activeClassName="selected" className="tab similar">
                    SIMILARES
                </NavLink>
                <Switch>
                    <Route exact path="/info" component={MovieInfo} />
                    <Route path="/videos" component={Video} />
                    <Route path="/similar" component={Similar} />
                </Switch>
            </div>
        </Router>
    )
}

export default MenuHero;