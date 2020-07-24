import React from 'react';
import "../App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav id="header-nav">
            <div className="access-nav">
                <ul>
                    <li><FontAwesomeIcon className="icons-nav" icon={faHome} /></li>
                    <li><FontAwesomeIcon className="icons-nav" icon={faVideo} /></li>
                    <li><FontAwesomeIcon className="icons-nav" icon={faTv} /></li>
                </ul>
            </div>
            <div className="searcher-nav">
            <FontAwesomeIcon className="icons-nav" icon={faSearch} />
                <input type="text" placeholder="Búsqueda..." />
            </div>
        </nav>
    )
};

export default Header;