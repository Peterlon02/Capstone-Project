import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './SectionCompetition.css'
import ContainerImg from './ComponentsCompetition/ContainerImg/ContainerImg'
import ContainerDetails from './ComponentsCompetition/ContainerDetails/ContainerDetails'
import ContainerNext from './ComponentsCompetition/ContainerNext/ContainerNext'
import ContainerSeason from'./ComponentsCompetition/ContainerSeason/ContainerSeason'

function SectionCompetition(){
    const {competitionId}=useParams()/* Id della competizione */
    const [teams, setTeams]=useState([])/* teams di quella competizione */
    const [seasons, setSeasons]=useState([])/*lista delle seasons di  quella competizione */
    const [league, setLeague]=useState([])
    const [events, setEvents]=useState([])
    const [pastEvents, setPastEvents]=useState([])

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

      useEffect(()=>{
        const fetchPastEventsLeague =async()=>{
          try{
            const response= await axios.get(`http://localhost:5000/api/pastevent/`+`${competitionId}`)
            setPastEvents(response.data.events)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchPastEventsLeague()
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
                <div className="col-md-9 ">
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
                  <h6 className="text-light mt-4">Results</h6>
                  {pastEvents.slice(0,10).map((pastEvent)=>{
                    return(
                      <ContainerNext 
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
                  })}
                  <h6 className="text-light mt-4">Description</h6>
                  <p className="text-light">{league[0].strDescriptionEN}</p>
                  <h6 className="text-light mt-4">Seasons</h6>
                  <div className="row ">
                    {seasons.map((season)=>{
                      return(
                        <div className="col-3 mt-3">
                          <ContainerSeason 
                            season={season.strSeason}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
                ): <p>Caricamento</p> }
              
            </div>
          </div>
    )
}

export default SectionCompetition