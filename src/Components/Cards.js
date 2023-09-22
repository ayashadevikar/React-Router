import React from "react";

const Cards = ({imgSrc, alt}) => {
    return (
        <>
          <div>
                
                <img className="h-60 w-56" src={imgSrc} alt={alt} />
               

             </div>     
          
        </>
    );
};

export default Cards;