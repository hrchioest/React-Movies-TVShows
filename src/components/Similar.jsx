import React, { useState, useEffect } from "react";
import axios from "axios";
import {similars} from "../service/index";

const Similar = ({id, type}) =>{

    const [similares, setSimilares] = useState([]);
    useEffect(() => {
        axios
            .get(similars.replace("[id]", id))
            .then((res) => {
                setSimilares(res.data.results);
            })
            .catch((error) => console.log(error));
    }, [id]);

    useEffect(() => console.log(similares),[similares]
    );

    return(
        <div>
            
        </div>
    )
}

export default Similar; 