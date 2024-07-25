import './ContainerDetails.css'

function ContainerDetails(prop) {
    return (
        <div>
            <h6 className="text-light mt-4">{prop.titleDetail}</h6>
            <h6 className="text-detail">{prop.detail}</h6>
        </div>
    )
}

export default ContainerDetails