import React, { useState } from "react";
import "../sass/components/pagination.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

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


    let lastPage= pageLinks.length-1;
    let elipsis="...";
    
    const indexShow = ( indexOrderOne, indexOrderTwo, indexZero, elipsisA=null ) =>{   //como se muestran los elementos (cada li) del pagination total (ul)           
        if (pages <=5){
            indexOrderOne = pageLinks.slice(0, 5);
            indexOrderTwo = null;
            indexZero = null;
            elipsis = null;
        } else if ( pages > 5 && currentPage < lastPage-1 && currentPage >= 4) {            
            indexOrderOne = pageLinks.slice(currentPage-2, currentPage+3);
            indexOrderTwo = pageLinks[lastPage];
            indexZero = pageLinks[0];
            elipsisA="...";
        } else if ( pages > 5 && currentPage < lastPage-1 && currentPage <= 5) {            
            indexOrderOne = pageLinks.slice(0, 5);
            indexOrderTwo = pageLinks[lastPage];
            indexZero = null;
        }else {
            indexOrderOne = null;
            indexOrderTwo = pageLinks.slice(currentPage-6,currentPage); 
            elipsisA="...";
            indexZero = pageLinks[0];
        }
        return(
            <>
                {indexZero}{elipsisA}{indexOrderOne}{elipsis}{indexOrderTwo}
            </>
        )

    }

    const previousPage = () => (currentPage !== 1 ? currentPage - 1  : currentPage);

    const followPage = () => currentPage !== lastPage ? console.log("funciona, ponele") : console.log("esta es la ultima pagina");

    return(
        <ul className="pagination">
            <li>
              {currentPage === 1 ? "" : <FontAwesomeIcon icon={faArrowLeft} onClick = {() => previousPage()} />}
            </li>
            {indexShow()}
            <li>
            {currentPage === parseInt(pageLinks.length) ? "" : <FontAwesomeIcon icon={faArrowRight} onClick = {() => followPage()}/>}
            </li>
        </ul>
    )  
}

export default Pagination;


