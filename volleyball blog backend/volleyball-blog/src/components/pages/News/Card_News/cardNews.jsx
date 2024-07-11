import React from "react";

function CardNews(prop){
    return(
        <div className='card'>
            <img src={prop.urlToImage} height={300} className='card-img-top'></img>
            <div className='card-body'>
                  <h4 className='card-title'>{prop.title}</h4>
                  <p className='card-text'>{prop.description}</p>
                  <a href={prop.url}>Read more</a>
            </div>
        </div>
    )
}

export default CardNews