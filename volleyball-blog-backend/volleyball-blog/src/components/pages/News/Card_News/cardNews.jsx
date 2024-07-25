import React from "react";

function CardNews(prop){
    return(
        <div className='card ' style={{backgroundColor:"green",}}>
            <img src={prop.urlToImage} height={300} className='card-img-top'></img>
            <div className='card-body'>
                  <h4 className='card-title text-light'>{prop.title}</h4>
                  <p className='text-light card-text'>{prop.description}</p>
                  <a className='text-light'href={prop.url}>Read more</a>
            </div>
        </div>
    )
}

export default CardNews