import './ContainerSeason.css'

function ContainerSeason(prop){
    return (
        <div className="d-flex flex-column align-items-center container-season " >
                    <i className="material-icons icon-calendar" >calendar_today</i>
                    <h6 className="text-light text-season text-center">{prop.season}</h6>
                  </div>
    )
}

export default ContainerSeason