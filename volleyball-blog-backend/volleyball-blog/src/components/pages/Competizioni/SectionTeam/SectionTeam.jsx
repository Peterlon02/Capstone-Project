import React from "react"
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import './SectionTeam.css'
import ContainerImg from "../SectionCompetition/ComponentsCompetition/ContainerImg/ContainerImg";
import ContainerDetails from "../SectionCompetition/ComponentsCompetition/ContainerDetails/ContainerDetails";
import { Link } from "react-router-dom";
import ContainerNext from "../SectionCompetition/ComponentsCompetition/ContainerNext/ContainerNext";
import ContainerTeams from "../SectionCompetition/ComponentsCompetition/ContainerTeams/ContainerTeams";
import ContainerFanart from "../SectionCompetition/ComponentsCompetition/ContainerFanart/ContainerFanart";

function SectionTeam(){
    
    const {teamId, competitionId}=useParams()

    const [players, setPlayers]=useState([])
    const [nextEvents, setNextEvents]=useState([])
    const [pastEvents, setPastEvents]=useState([])
    const [teamDetails, setTeamDetails]=useState([])

    useEffect(()=>{
        const fetchPlayers =async()=>{
          try{
            const response= await axios.get('https://capstone-project-alpha-gilt.vercel.app/api/player/'+ `${teamId}`)
            setPlayers(response.data.player)
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
            setPastEvents(response.data.results)
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
                  <h6 className="name-team">{teamDetails[0].strLeague}</h6>
                </Link>
                </div>
                <div className="col-md-9">
                <h6 className="text-light">Logo</h6>
                <img src={teamDetails[0].strLogo} className="img-logo"></img>
                <h6 className="text-light mt-4"> Upcoming</h6>
                {nextEvents != null ? (                  
                    nextEvents.map((event)=>{
                    return(
                      <ContainerNext 
                    path={`/competizioni/${teamDetails[0].idLeague}/match/${event.idEvent}`}
                    date={event.dateEvent}
                    homename={event.strHomeTeam}
                    homebadge={event.strHomeTeamBadge}
                    awayname={event.strAwayTeam}
                    awaybadge={event.strAwayTeamBadge}
                    time={event.strTime}
                  />
                    )
                  })
                  ) : <h6 className="text-light">None...</h6> }
                  <h6 className="text-light mt-4">Results</h6>
                  {pastEvents!=null ?(
                    pastEvents.map((pastEvent)=>{
                      return(
                        <ContainerNext 
                        path={`/competizioni/${teamDetails[0].idLeague}/match/${pastEvent.idEvent}`}
                      date={pastEvent.dateEvent}
                      homename={pastEvent.strHomeTeam}
                      homebadge={pastEvent.strHomeTeamBadge}
                      awayname={pastEvent.strAwayTeam}
                      awaybadge={pastEvent.strAwayTeamBadge}
                      time={pastEvent.strTime}
                      homeresult={pastEvent.intHomeScore}
                      awayresult={pastEvent.intAwayScore}
                    />
                      )
                    })
                  ):<p >Caricamento</p>}
                  <h6 className="text-light mt-4">Description</h6>
                  <p className="text-light">{teamDetails[0].strDescriptionEN}</p>
                  <h6 className="text-light mt-4">Team Members</h6>
                  <div className="row">
                  {players!=null ? (
                    players.map((player)=>{
                      return(
                        <div className="col-3">
                          <ContainerTeams 
                          path={`/competizioni/${teamDetails[0].idLeague}/player/${player.idPlayer}`}
                          img={player.strThumb}
                          nameTeam={player.strPlayer}
                        />
                        </div>
                      )
                    })
                  ): <p>Caricamento</p>}
                  <h6 className="text-light mt-4">Fanart</h6>
                 <ContainerFanart 
                  img1={teamDetails[0].strFanart1}
                  img2={teamDetails[0].strFanart2}
                  img3={teamDetails[0].strFanart3}
                  img4={teamDetails[0].strFanart4}
                 />
                 <ContainerImg 
                  title='Banner'
                  img={teamDetails[0].strBanner}
                 />
                  </div>
                </div>
              </div>
              ):<p>Caricamento</p>}
            </div>
        </div>
    )
}

export default SectionTeam;