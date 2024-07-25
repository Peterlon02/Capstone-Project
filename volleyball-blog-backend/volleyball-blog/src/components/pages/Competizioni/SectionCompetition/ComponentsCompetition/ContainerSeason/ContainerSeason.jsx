import './ContainerSeason.css'
import { Link } from 'react-router-dom'

function ContainerSeason(prop){
    return (
        <Link to={prop.path} className='text-decoration-none'>
        <div className="d-flex flex-column align-items-center container-season " >
                    <i className="material-icons icon-calendar" >calendar_today</i>
                    <h6 className=" text-season text-center">{prop.season}</h6>
                  </div>
                  </Link>
    )
}

export default ContainerSeason