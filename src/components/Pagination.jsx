import React from "react";
import "../sass/components/pagination.scss";
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
        <span className='numb'>{i}</span>
      </li>
    );
  }

  const lastPage = parseInt(pageLinks.length);
  const elipsis = "...";

  const indexShow = () => {
    let indexOrder;
    let indexOrderTwo;
    if (currentPage < 6) {
      indexOrder = pageLinks.slice(0, 5);
      indexOrderTwo = pageLinks[lastPage - 1];
    } else if (currentPage < lastPage) {
      indexOrder = pageLinks.slice(
        currentPage - 2,
        currentPage + 3 > lastPage ? lastPage - 1 : currentPage + 3
      );
      indexOrderTwo = pageLinks[lastPage - 1];
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
      <li className='arrow'>
        {currentPage === 1 ? (
          ""
        ) : (
          <span className='arrowPress'>
            <FontAwesomeIcon icon={faArrowLeft} onClick={previousPage} />
          </span>
        )}
      </li>
      {indexShow()}
      <li className='arrow'>
        {currentPage === parseInt(pageLinks.length) ? (
          ""
        ) : (
          <span className='arrowPress'>
            <FontAwesomeIcon icon={faArrowRight} onClick={followPage} />
          </span>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
