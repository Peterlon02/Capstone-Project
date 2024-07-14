import './ContainerFanart.css'

function ContainerFanart(prop){
    return(
        <div className='row'>
            <div className='col-6'>
            <img src={prop.img1} className='img-fluid'></img>
        </div>
        <div className='col-6'>
        <img src={prop.img2} className='img-fluid'></img>
    </div>
    <div className='col-6'>
    <img src={prop.img3} className='img-fluid'></img>
</div>
<div className='col-6'>
            <img src={prop.img4} className='img-fluid'></img>
        </div>
        </div>
        
    )
}

export default ContainerFanart