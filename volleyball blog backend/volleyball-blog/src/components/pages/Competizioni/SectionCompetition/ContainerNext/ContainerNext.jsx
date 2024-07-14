import './ContainerNext.css'

function ContainerNext(prop){
    return(
        <div className=" p-0 d-flex ">
                    <div className="text-light">{prop.date}</div>
                    <div className="container w-50  d-flex  justify-content-between">
                      <div className="d-flex align-items-center justify-content-center text-center container-team">
                        <h6 className='name-team'>{prop.homename}</h6>
                        <img src={prop.homebadge} className="img-fluid imgbadge"></img>
                      </div>
                     <div className='text-light '>-</div>
                     <div className="d-flex align-items-center  container-team justify-content-center text-center">
                        <img src={prop.awaybadge} className="img-fluid img-badge"></img>
                        <h6 className='name-team'>{prop.awayname}</h6>
                      </div>
                    </div>
                    <div className='text-light '>{prop.time}</div>
                  </div>
    )
}

export default ContainerNext