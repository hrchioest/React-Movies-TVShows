import React from "react";
import "../sass/components/pagination.scss";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) =>{

    const pageLinks = [];

    for(let i = 1;  i <= props.pages + 1; i++){
        let active = props.currentPage === i ? 'active' : '';
        pageLinks.push(
            <li className={`list-numbers ${active}`} key={i} onClick={(() => props.nextPage(i))}>
                <Link className="numb">{i}</Link>
            </li>
        )
    }

    const lastIndex = parseInt(pageLinks.length-1)
    let cortado_a = []
    let cortado_b = ["..."]
    let cortado_c = []
    
    if (props.currentPage <5){
        cortado_a = pageLinks.slice(0, 5); 
        cortado_c = pageLinks[lastIndex]
    } else if (props.currentPage < lastIndex) {            
        cortado_a = pageLinks.slice(props.currentPage-3, props.currentPage+2); 
        cortado_c = pageLinks.slice[lastIndex]
    } else {
        cortado_a = []
        cortado_c= pageLinks.slice(props.currentPage-3, props.currentPage); 
    }

    //const cortado_a = pageLinks.slice(0, props.currentPage+4);
    
    //const cortado_c = pageLinks.slice(lastIndex-1, lastIndex);

    return(
        <ul className="pagination">
            <li>
                <Link><FontAwesomeIcon className="arrow-pgn" icon={faArrowLeft}/></Link>
            </li>
                {cortado_a} {cortado_b} {cortado_c}
            <li>
                <Link><FontAwesomeIcon className="arrow-pgn" icon={faArrowRight}/></Link>
            </li>
        </ul>
    )
}

export default Pagination;

//            {pageLinks.length > 3 ? props.currentPage +  "..." + lastIndex : pageLinks}