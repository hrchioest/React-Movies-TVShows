import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import ListCard from "../sections/ListCard"
import "../sass/components/similars.scss";
import { similars } from "../service/index";

const Similar = ({ id, type, limit = 0 }) => {

    const [similares, setSimilares] = useState([]);
    useEffect(() => {
        axios.get(similars.replace("[id]", id).replace("[type]", type))
            .then((res) => {
                setSimilares(res.data.results);
            })
            .catch((error) => console.log(error));
    }, [id]);

    useEffect(() => console.log({ similares }), [similares]
    );

    return (

        <div className="similars-box">
            {similares.map((movie, i) => {
                if (i < limit || limit === 0) {
                    return (
                        <Card key={i} id={movie.id} type={type} image={movie.poster_path} title={movie.title || movie.name} />
                    )
                }
            })
            }
        </div>

    )
}

export default Similar; 