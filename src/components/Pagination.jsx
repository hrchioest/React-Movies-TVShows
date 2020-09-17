import React from "react";
import "../sass/components/pagination.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) =>{

    return(
        <ul id="pagination">
            <li className="list-numbers">
                <FontAwesomeIcon className="arrow-pgn" icon={faArrowLeft}/>
            </li>
        </ul>
    )
}

export default Pagination;