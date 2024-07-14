import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './SectionCompetition.css'
import ContainerImg from './ContainerImg/ContainerImg'
import ContainerDetails from './ContainerDetails/ContainerDetails'
import ContainerNext from './ContainerNext/ContainerNext'
function SectionCompetition(){
    const {competitionId}=useParams()/* Id della competizione */
    const [teams, setTeams]=useState([])/* teams di quella competizione */
    const [seasons, setSeasons]=useState([])/*lista delle seasons di  quella competizione */
    const [league, setLeague]=useState([])
    const [events, setEvents]=useState([])

    useEffect(()=>{
        const fetchTeams =async()=>{
          try{
            const response= await axios.get(`http://localhost:5000/api/team/`+`${competitionId}`)
            setTeams(response.data.teams)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchTeams()
      }, [])

      useEffect(()=>{
        const fetchSeasons =async()=>{
          try{
            const response= await axios.get(`http://localhost:5000/api/season/`+`${competitionId}`)
            setSeasons(response.data.seasons)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchSeasons()
      }, [])

      useEffect(()=>{
        const fetchLeague =async()=>{
          try{
            const response= await axios.get(`http://localhost:5000/api/league/`+`${competitionId}`)
            setLeague(response.data.leagues)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchLeague()
      }, [])

      useEffect(()=>{
        const fetchNextEventsLeague =async()=>{
          try{
            const response= await axios.get(`http://localhost:5000/api/nextevent/`+`${competitionId}`)
            setEvents(response.data.events)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchNextEventsLeague()
      }, [])

    return (
          <div className="container-fluid main-container ">
            <div className="container">
              {league.length>0 ? (
              <div className="row pt-2">
                <div className="col-md-3 ">
                  <h6 className="text-light ">Name</h6>
                  <h4 className="name-title">{league[0].strLeague}</h4>
                  <ContainerImg title='Badge' img={league[0].strBadge}/>
                  <ContainerImg title='Poster' img={league[0].strPoster}/>
                  <ContainerDetails titleDetail='Established' detail={league[0].intFormedYear}/>
                  <ContainerDetails titleDetail='First Recorded Event' detail={league[0].dateFirstEvent}/>
                  <ContainerDetails titleDetail='Current Season' detail={league[0].strCurrentSeason}/>
                  <ContainerDetails titleDetail='Sport' detail={league[0].strSport}/>
                  <ContainerDetails titleDetail='Location' detail={league[0].strCountry}/>
                  <ContainerDetails titleDetail='Gender' detail={league[0].strGender}/>
                </div>
                <div className="col-9 ">
                <h6 className="text-light">Logo</h6>
                <img src={league[0].strLogo} className="img-logo"></img>
                <h6 className="text-light mt-4"> Upcoming</h6>
                {events != null ? (                  
                    events.slice(0,10).map((event)=>{
                    return(
                      <ContainerNext 
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
                </div>
              </div>
                ): <p>Caricamento</p> }
              
            </div>
          </div>
    )
}

export default SectionCompetition