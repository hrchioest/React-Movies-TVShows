import React from 'react';
import ListCard from "../sections/ListCard";

import { tvPopular, tvTopRated, tvNow } from "../service/index";

const Tv = () => {


    return(
        <>
            <ListCard title="Series populares" limit={5} api={tvPopular} type="tv" link ="/tvPopular/trending" />
            <ListCard title="Series con más críticas" limit={5} api={tvTopRated} type="tv" link ="/tvTopRated/trending" />
            <ListCard title="Series al aire" limit={5} api={tvNow} type="tv" link ="/tvNow/trending" />
        </>
    )
}

export default Tv;