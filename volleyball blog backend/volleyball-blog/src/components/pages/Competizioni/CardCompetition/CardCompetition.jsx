import { Link } from "react-router-dom"
import './CardCompetition.css'
function CardCompetition(prop){
    return (<Link to={`/competizioni/${prop.idLeague}`} className="text-decoration-none">
        <div className='card '>
          <div className="container-title">
            <h1 className='text-center'>{prop.strLeague}</h1>
          </div>
          <img src={prop.strBadge} className='img-fluid '></img>
          <p className="description">{prop.strDescriptionEN}</p>
        </div>
        </Link>)
}

export default CardCompetition