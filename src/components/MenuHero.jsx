import React,{useState, useEffect} from 'react';
import "../sass/components/menuHero.scss";
import MovieInfo from "./MovieInfo";
import Video from "./Video";
import Similar from "./Similar";
import Hero from "./Hero";
// import Cast from "./Cast";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {info} from "../service/index";

const MenuHero = () =>{

    const {id} = useParams();

    const [information, setInformation] = useState([]);
    useEffect(() => {
      axios.get(info.replace("[id]",id))  
        .then(res => {
          setInformation(res.data);
        }).catch(error => console.log(error))
       
    },[]);
   
    return(
        <>
        <Hero background={information.backdrop_path}/>
        <Router>
            <div className="menu-container">
                <NavLink to={`/${id}/info`} exact activeClassName="selected" className="tab info">
                    INFO
                </NavLink>
                <NavLink to={`/${id}/reparto`} activeClassName="selected" className="tab vid">
                    REPARTO
                </NavLink>
                <NavLink to="/videos" exact activeClassName="selected" className="tab vid">
                    VIDEOS
                </NavLink>
                <NavLink to="/similar" exact activeClassName="selected" className="tab similar">
                    SIMILARES
                </NavLink>
                <Switch>
                    <Route exact path={`/${id}/info`} render={() => (
                        <MovieInfo id={information.id}
                            title={information.title}
                            poster={information.poster_path}
                            stars={information.vote_average}
                            overview={information.overview}
                            length={information.runtime}
                            genres={information.genres}
                            budget={information.budget}
                            revenue={information.revenue}
                            production={information.production_companies}
                        />
                    )} />
                    <Route path={`/:${id}/reparto`} render={(props) => (
                        // <Cast id={information.id} />
                    )}/>
                    <Route path="/videos" component={Video} />
                    <Route path="/similar" component={Similar} />
                </Switch>
            </div>
        </Router>
        </>
    )
}

export default MenuHero;