import React from 'react';
import '../Style/MenuHero.scss';

const MenuHero = () =>{
    return(
        <div className="menu-container">
            <a className="tab info">INFO</a>
            <a className="tab cast">REPARTO</a>
            <a className="tab vid">VIDEOS</a>
            <a className="tab similar">SIMILARES</a>
        </div>
    )
}

export default MenuHero