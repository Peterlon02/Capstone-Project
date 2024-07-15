import React from "react"
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import './SectionTeam.css'
import ContainerImg from "../SectionCompetition/ComponentsCompetition/ContainerImg/ContainerImg";
import ContainerDetails from "../SectionCompetition/ComponentsCompetition/ContainerDetails/ContainerDetails";
import { Link } from "react-router-dom";

function SectionTeam(){
    
    const {teamId, competitionId}=useParams()

    const [players, setPlayers]=useState([])
    const [nextEvents, setNextEvents]=useState([])
    const [pastEvents, setPastEvents]=useState([])
    const [teamDetails, setTeamDetails]=useState([])

    useEffect(()=>{
        const fetchPlayers =async()=>{
          try{
            const response= await axios.get('http://localhost:5000/api/player/'+ `${teamId}`)
            setPlayers(response.data.player)
            console.log('http://localhost:5000/api/player/'+ `${teamId}`)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchPlayers()
      }, [])

      useEffect(()=>{
        const fetchEvents =async()=>{
          try{
            const response= await axios.get('http://localhost:5000/api/nextevents/team/'+ `${teamId}`)
            setNextEvents(response.data.events)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchEvents()
      }, [])

      useEffect(()=>{
        const fetchEvents =async()=>{
          try{
            const response= await axios.get('http://localhost:5000/api/pastevents/team/'+ `${teamId}`)
            setPastEvents(response.data.events)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchEvents()
      }, [])

      useEffect(()=>{
        const fetchDetails =async()=>{
          try{
            const response= await axios.get('http://localhost:5000/api/teamdetail/'+ `${teamId}`)
            setTeamDetails(response.data.teams)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchDetails()
      }, [])

    return(
        <div className="container-fluid main-container pb-5">
            <div className="container ">
              {teamDetails.length>0 ? (
                <div className="row pt-2">
                <div className="col-md-3  ">
                  <h6 className="text-light ">Name</h6>
                  <h4 className="name-title ">
                    {teamDetails[0].strTeam}
                  </h4>
                  < ContainerImg
                    title='Badge' img={teamDetails[0].strBadge}
                  />
                  <ContainerDetails titleDetail='Established' detail={teamDetails[0].intFormedYear}/>
                  <ContainerDetails titleDetail='Sport' detail={teamDetails[0].strSport}/>
                  <ContainerDetails titleDetail='Location' detail={teamDetails[0].strLocation}/>
                <ContainerDetails titleDetail='Stadium' detail={teamDetails[0].strStadium}/>
                <ContainerDetails titleDetail='Stadium Capacity' detail={teamDetails[0].intStadiumCapacity}/>
                <h6 className="text-light mt-4">Competitions</h6>
                <Link to={`/competizioni/${competitionId}` } className="text-decoration-none">
                  <h6 className="competition-detail">{teamDetails[0].strLeague}</h6>
                </Link>
                </div>
                <div className="col-md-9">
                <h6 className="text-light">Logo</h6>
                <img src={teamDetails[0].strLogo} className="img-logo"></img>
                </div>
              </div>
              ):<p>Caricamento</p>}
            </div>
        </div>
    )
}

export default SectionTeam;