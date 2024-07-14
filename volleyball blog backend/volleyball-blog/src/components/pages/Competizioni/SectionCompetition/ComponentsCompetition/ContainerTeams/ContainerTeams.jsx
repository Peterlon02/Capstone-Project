import './ContainerTeams.css'
import { Link } from 'react-router-dom'
function ContainerTeams(prop){
    return(
        <Link className='text-decoration-none' to={prop.path}>
            <div>
             <div className="d-flex flex-column align-items-center">
                <img src={prop.img} className="img-fluid img-team mt-2"></img>
                <h6 className=' name-team text-center'>{prop.nameTeam}</h6>
             </div>
        </div>
        </Link>
    )
}

export default ContainerTeams