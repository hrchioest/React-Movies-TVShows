import React, {useState, useEffect} from "react";
import axios from "axios";
import "../sass/sections/main-pages.scss";
import {cast} from "../service/index";
import Cast from "../components/Cast";

const ListCast = ({id, type}) =>{

    const [castInfo, setCastInfo] = useState([]);

    useEffect(() => {
    axios.get(cast.replace("[id]", id).replace("[type]", type))  
        .then(res => {
            setCastInfo(res.data.cast);
        }).catch(error => console.log(error))
    },[]);

    return(
        <section id="main-page">
            <div className='list-main-page'>
                <div className='card-list-container'>
                    {castInfo.map((castInfo, i) => {
                        return (
                            <Cast key={i} id={castInfo.id} image={castInfo.profile_path } name={castInfo.name} character={castInfo.character}/>
                        )
                    })
                    }
                </div>
            </div>
        </section>
    )
}

export default ListCast;
