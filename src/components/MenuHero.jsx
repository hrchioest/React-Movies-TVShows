import React from 'react';
import '../sass/components/menuHero.scss';
import { NavLink } from 'react-router-dom';

const MenuHero = () =>{
    return(
        <div className="menu-container">
            <NavLink to="/info" exact activeClassName="selected" className="tab info">
                INFO
            </NavLink>
            <NavLink to="/cast" exact activeClassName="selected" className="tab cast">
                REPARTO
            </NavLink>
            <NavLink to="/videos" exact activeClassName="selected" className="tab vid">
                VIDEOS
            </NavLink>
            <NavLink to="/similar" exact activeClassName="selected" className="tab similar">
                SIMILARES
            </NavLink>
        </div>
    )
}

export default MenuHero