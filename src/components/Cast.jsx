import React, { useState, useEffect } from 'react';
import axios from "axios";


const Cast = ({ id }) => {


    const [cast, setCast] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b28a6d7a756aac4ded04e3b860e94284&language=es`)
            .then(res => {
                setCast(res.data.cast);
            }).catch(error => console.log(error))
    }, []);

    useEffect(() => console.log(cast), [cast]);


    let castList;
    if (cast) {
        castList = cast.map((c, i) => {
            return (
                <li key={i}>
                    <span>{c.name} - </span>
                    <span>{c.character}</span>
                </li>
            );
        });
    }


    return (
        <div>
                <ul>
                    {castList}
                </ul>
        </div>
    )
}

export default Cast; 