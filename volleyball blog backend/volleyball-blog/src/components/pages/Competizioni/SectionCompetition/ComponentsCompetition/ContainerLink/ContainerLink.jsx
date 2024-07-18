import { Link } from "react-router-dom"

function ContainerLink(prop){
    return(
        <div>
           < h6 className="text-light mt-4">{prop.title}</h6>
                            <Link to={prop.name1 } className="text-decoration-none">
                          <h6 className="name-team">{prop.name2}</h6>
                            </Link>
        </div>
    )
}
export default ContainerLink