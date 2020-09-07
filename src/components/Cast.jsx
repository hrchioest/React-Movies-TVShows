import React, { useState, useEffect } from 'react';
import axios from "axios";


const Cast = ({ id }) => {

    const [cast, setCast] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b28a6d7a756aac4ded04e3b860e94284&language=es`)
            .then(res => {
                setCast(res.data.results);
            }).catch(error => console.log(error))
    }, []);

    useEffect(() => console.log(cast), [cast]);

    return (
        <div>
            <ul>
                {cast.map((cast, i) => {
                    return (
                        <li key={i}>
                            <span>{cast.name}</span>
                            <span>{cast.character}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Cast; 