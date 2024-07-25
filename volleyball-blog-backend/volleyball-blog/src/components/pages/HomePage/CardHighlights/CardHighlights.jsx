import React from "react";
import'./CardHighlights.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function CardHilights(prop){
    return(
        <a href={prop.video} target="_blank" rel="noopener noreferrer" className="thumbnail-wrapper">
             <img src={prop.image} className='img-fluid'/>
             <div className='play-icon'>
             <FontAwesomeIcon icon={faYoutube} />
             </div>
        </a>
    )
}

export default CardHilights