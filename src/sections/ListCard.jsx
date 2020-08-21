import React,{ useEffect, useState } from 'react';
import Card from '../components/Card';
import "../sass/sections/main-pages.scss";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



const ListCard = ({title, limit = 0, api, link}) =>{
    const [list, setList] = useState([]);

  useEffect(() => {
    axios.get(api)  
      .then(res => {
        setList(res.data.results);
      }).catch(error => console.log(error))
  },[]);
    
    return (
        <section id="main-page">
            <div className='list-main-page'>
                <a href={link}>
                    <h2>
                        {title}
                        {link? <Link to={link}><FontAwesomeIcon className='arrow-list' icon={faArrowRight} /></Link>:""}  
                    </h2>
                </a>
                <div className='card-list-container'>
                    {list.map((movie, i) => {
                        if (i < limit || limit === 0) {
                        return (
                            <Card key={i} image={movie.poster_path} title={movie.title} />
                        )
                        }
                    })
                    }

                </div>
            </div>
        </section>
    )
}

export default ListCard;