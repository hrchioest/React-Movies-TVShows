import React from "react";
import "../sass/components/pagination.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ pages, currentPage, nextPage }) => {
  const pageLinks = [];

  for (let i = 1; i <= pages + 1; i++) {
    let active = currentPage === i ? "active" : "";

    pageLinks.push(
      <li
        className={`list-numbers ${active}`}
        key={i}
        onClick={() => nextPage(i)}
      >
        <Link className='numb'>{i}</Link>
      </li>
    );
  }

  const lastPage = parseInt(pageLinks.length - 1);
  const elipsis = "...";

  const indexShow = (indexOrder, indexOrderTwo) => {
    //como se muestran los elementos (cada li) del pagination total (ul)
    if (currentPage < 5) {
      indexOrder = pageLinks.slice(0, 5);
      indexOrderTwo = pageLinks[lastPage];
    } else if (currentPage < lastPage) {
      indexOrder = pageLinks.slice(currentPage - 3, currentPage + 3);
      indexOrderTwo = pageLinks[lastPage];
    } else {
      indexOrder = [pageLinks[0]];
      indexOrderTwo = pageLinks.slice(currentPage - 6, currentPage);
    }
    return (
      <>
        {indexOrder}
        {elipsis}
        {indexOrderTwo}
      </>
    );
  };

  const previousPage = () => nextPage(parseInt(currentPage - 1));

  const followPage = () => nextPage(parseInt(currentPage) + 1);

  return (
    <ul className='pagination'>
      <li class='arrow'>
        {currentPage === 1 ? (
          ""
        ) : (
          <Link className='arrowPress'>
            <FontAwesomeIcon icon={faArrowLeft} onClick={previousPage} />
          </Link>
        )}
      </li>
      {indexShow()}
      <li class='arrow'>
        {currentPage === parseInt(pageLinks.length) ? (
          ""
        ) : (
          <Link className='arrowPress'>
            <FontAwesomeIcon icon={faArrowRight} onClick={followPage} />
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
