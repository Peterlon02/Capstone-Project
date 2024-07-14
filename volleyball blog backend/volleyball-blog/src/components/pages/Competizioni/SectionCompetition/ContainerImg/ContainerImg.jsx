import React from "react"

function ContainerImg(prop){
    return(
        <div >
            <h6 className="text-light mt-4">{prop.title}</h6>
                  <div className="container">
                    <img src={prop.img} className="img-fluid"></img>
                  </div>
        </div>
    )
}
export default ContainerImg