import React,{useState, useEffect} from 'react';
import "../sass/components/menuHero.scss";
import MovieInfo from "./MovieInfo";
import Video from "./Video";
import Similar from "./Similar";
import Hero from "./Hero";
import axios from "axios";
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {info} from "../service/index";

const MenuHero = () =>{

    const {id} = useParams();

    const [information, setInformation] = useState([]);
    useEffect(() => {
      axios.get(info.replace("[id]",id))  
        .then(res => {
          setInformation(res.data.results);
        }).catch(error => console.log(error))
       
    },[]);
    console.log(id)
    return(
        <>
        <Hero id={id}/>
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
        </>
    )
}

export default MenuHero;