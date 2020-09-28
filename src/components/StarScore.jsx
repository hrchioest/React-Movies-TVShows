import React from "react";

const StarScore = ({score}) => {
 
    const cantStar = (score /2);
    const cantStarInt = parseInt(cantStar);
    const cantStarEmpty = (5-cantStar);
   
    const stars= [];

    for(let i=1; i<=cantStarInt; i++ ){
        stars.push(<i key={i} className="fas fa-star"></i>)
    }
    if (score % 2 !== 0){
        stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    } 
    for(let i=1; i<=cantStarEmpty; i++){
        stars.push(<i key={`${i}empty`} className="far fa-star"></i>)
    }
   
    
    return(
        <>
            <span>{stars.map(star =>star)}</span>  
        </>
       
    )
}

export default StarScore;