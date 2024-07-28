import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ContainerImg from "../SectionCompetition/ComponentsCompetition/ContainerImg/ContainerImg"
import ContainerDetails from "../SectionCompetition/ComponentsCompetition/ContainerDetails/ContainerDetails"


function SectionPlayer(){
    const {playerId}=useParams()
    const [detail, setDetail]=useState([])

    useEffect(()=>{
        const fetchLeague =async()=>{
          try{
            const response= await axios.get(`https://capstone-project-alpha-gilt.vercel.app/api/playerdetails/`+`${playerId}`)
            setDetail(response.data.players[0])
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchLeague()
      }, [])
    return (
        <div className="container-fluid main-container pb-5">
              <div className="container">
              {detail!=null ? (
                <div className="row pt-2">
                <div className="col-md-3  ">
                  <h6 className="text-light ">Name</h6>
                  <h4 className="name-title ">
                    {detail.strPlayer}
                  </h4>
                  < ContainerImg
                    title='Thumb' img={detail.strThumb}
                  />
                  <ContainerDetails titleDetail='Born' detail={detail.dateBorn}/>
                  <ContainerDetails titleDetail='Birth Place' detail={detail.strBirthLocation}/>
                  <ContainerDetails titleDetail='Position' detail={detail.strPosition}/>
                  <ContainerDetails titleDetail='Status' detail={detail.strStatus}/>
                  <ContainerDetails titleDetail='Ethnicity' detail={detail.strEthnicity}/>
                  <ContainerDetails titleDetail='Team Number' detail={detail.strNumber}/>
                  <ContainerDetails titleDetail='Height' detail={detail.strHeight}/>
                  <ContainerDetails titleDetail='Weight' detail={detail.strWeight}/>
                  < ContainerImg
                    title='Cutout' img={detail.strCutout}
                  />
            </div>
            <div className="col-md-9">
            <ContainerDetails titleDetail='Description' detail={detail.strDescriptionEN}/>
            </div>

            </div>):<p></p>}
              </div>
            </div>
        
    )
}

export default SectionPlayer