import React from "react";
import '../sass/components/pager.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination= ({currentPage, totalPage}) =>{

    console.log('paginacion pagina actual', currentPage);
    

    return(
        <ul className="listado-pager">
            <li className="button">
                <FontAwesomeIcon className='arrow-list' icon={faArrowLeft} />
            </li>
            <li className="button">{ currentPage }</li>
            <li className="button">
                <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
            </li>
        </ul>
    )
}

export default Pagination;