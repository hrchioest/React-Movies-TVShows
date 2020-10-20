import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../sass/sections/main-pages.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ListCard = ({
  title,
  limit = 0,
  api,
  link,
  type,
  setTotalPage,
  currentPage
}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(api.replace("[page]", currentPage))
      .then((res) => {
        if (setTotalPage) setTotalPage(res.data.total_pages);
        setList(res.data.results);
      })
      .catch((error) => console.log(error));
  }, [api, currentPage, setTotalPage]);

  return (
    <section id='main-page'>
      <div className='list-main-page'>
        <h2>
          {title}
          {link ? (
            <Link to={link}>
              <FontAwesomeIcon className='arrow-list' icon={faArrowRight} />
            </Link>
          ) : (
            ""
          )}
        </h2>

        <div className='card-list-container'>
          {list.map((movieTv, i) => {
            if (i < limit || limit === 0) {
              return (
                <Card
                  key={i}
                  id={movieTv.id}
                  type={type}
                  image={movieTv.poster_path}
                  title={movieTv.title || movieTv.name}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default ListCard;
