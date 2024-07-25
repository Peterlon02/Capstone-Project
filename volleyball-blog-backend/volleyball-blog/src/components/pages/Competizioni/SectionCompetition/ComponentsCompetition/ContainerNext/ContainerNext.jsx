import './ContainerNext.css'
import { Link } from 'react-router-dom'
function ContainerNext(prop){
    return(
        <div className=" p-0 d-flex align-items-center main-container">
                    <div className="text-light">{prop.date}</div>
                    <div className="container w-50  d-flex  justify-content-between align-items-center">
                      <Link className='text-decoration-none' to={prop.path}>
                      <div className="d-flex align-items-center justify-content-end text-end container-team">
                        <h6 className='name-team'>{prop.homename}</h6>
                        <img src={prop.homebadge} className="img-fluid imgbadge"></img>
                      </div>
                      </Link>
                     <div className='text-light trattino'>{prop.homeresult}-{prop.awayresult}</div>
                     <Link to={prop.path} className='text-decoration-none' >
                     <div className="d-flex align-items-center  container-team justify-content-start text-start">
                        <img src={prop.awaybadge} className="img-fluid img-badge"></img>
                        <h6 className='name-team'>{prop.awayname}</h6>
                      </div>
                     </Link>
                    </div>
                    
                    <div className='text-light '>{prop.time}</div>
                  </div>
    )
}

export default ContainerNext