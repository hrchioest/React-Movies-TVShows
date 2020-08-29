import React from 'react';
import ListCard from "../sections/ListCard";

import { tvPopular, tvTopRated, tvNow } from "../service/index";

const Tv = () => {


    return(
        <>
            <ListCard title="Series populares" limit={5} api={tvPopular} link ="/tvPopular/trending/page/1" />
            <ListCard title="Series con más críticas" limit={5} api={tvTopRated} link ="/tvTopRated/trending/page/1" />
            <ListCard title="Series al aire" limit={5} api={tvNow} link ="/tvNow/trending/page/1" />
        </>
    )
}

export default Tv;