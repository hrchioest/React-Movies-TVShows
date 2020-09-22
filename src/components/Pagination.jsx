import React from "react";
import "../sass/components/pagination.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Pagination = ({ pages, currentPage, nextPage }) =>{

    const pageLinks = [];


    for(let i = 1;  i <= pages + 1; i++){
        let active = currentPage === i ? 'active' : '';
        pageLinks.push(
            <li className={`list-numbers ${active}`} key={i} onClick={(() => nextPage(i))}>
                <Link className="numb">{i}</Link>
            </li>
        )
    }

    const indexNumbers = () =>{

        const lastIndex = parseInt(pageLinks.length-1)
        let firstIndexes;
        const elipsis = "..."
        let lastIndexes;
        
        if (currentPage <5){
            firstIndexes = pageLinks.slice(0, 5);
            lastIndexes = pageLinks[lastIndex]
        } else if ( (currentPage-1) < lastIndex ) {            
            firstIndexes = pageLinks.slice(currentPage-3, currentPage+3); 
            lastIndexes = pageLinks.slice[lastIndex-3, lastIndex+3]
        } else {
            firstIndexes = []
            lastIndexes= pageLinks.slice(currentPage-6,currentPage); 
        }
        return(
            <>
                {firstIndexes}{elipsis}{lastIndexes}
            </>
        )

    }

    return(
        <ul className="pagination">
            <li>
                <Link><FontAwesomeIcon className="arrow-pgn" icon={faArrowLeft}/></Link>
            </li>
            {indexNumbers()}
            <li>
                <Link><FontAwesomeIcon className="arrow-pgn" icon={faArrowRight}/></Link>
            </li>

        </ul>
    )
}

export default Pagination;


