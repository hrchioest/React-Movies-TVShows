import React from 'react';
import '../sass/components/cast.scss';
import CastCard from './CastCard';

const Cast = () =>{
    return(
        <div className="container-cast">
            <div className="container-cards">
                <CastCard/>
            </div>
        </div>
    )
}

export default Cast;