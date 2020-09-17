import React from "react";
import "../sass/components/pagination.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) =>{

    const pageLinks = []
    for(let i = 1;  i <= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : '';
        pageLinks.push(
            <li className={`list-numbers ${active}`} key={i} onClick={(() => props.nextPage(i))}>
                <Link className="numb">{i}</Link>
            </li>
        )
    }
    return(
        <ul className="pagination">
            <FontAwesomeIcon className="arrow-pgn" icon={faArrowLeft}/>
            {pageLinks}
            <FontAwesomeIcon className="arrow-pgn" icon={faArrowRight}/>
        </ul>
    )
}

export default Pagination;
