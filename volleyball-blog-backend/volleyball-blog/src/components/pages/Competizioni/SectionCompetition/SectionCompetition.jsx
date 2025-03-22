import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import './SectionCompetition.css'
import ContainerImg from './ComponentsCompetition/ContainerImg/ContainerImg'
import ContainerDetails from './ComponentsCompetition/ContainerDetails/ContainerDetails'
import ContainerNext from './ComponentsCompetition/ContainerNext/ContainerNext'
import ContainerSeason from'./ComponentsCompetition/ContainerSeason/ContainerSeason'
import ContainerTeams from './ComponentsCompetition/ContainerTeams/ContainerTeams'
import ContainerFanart from './ComponentsCompetition/ContainerFanart/ContainerFanart'

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
            const response= await axios.get(`${process.env.REACT_APP_API_URL}/api/team/`+`${competitionId}`)
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
            const response= await axios.get(`${process.env.REACT_APP_API_URL}/api/season/`+`${competitionId}`)
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
            const response= await axios.get(`${process.env.REACT_APP_API_URL}/api/league/`+`${competitionId}`)
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
            const response= await axios.get(`${process.env.REACT_APP_API_URL}/api/nextevent/`+`${competitionId}`)
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
            const response= await axios.get(`${process.env.REACT_APP_API_URL}/api/pastevent/`+`${competitionId}`)
            setPastEvents(response.data.events)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchPastEventsLeague()
      }, [])

    return (
          <div className="container-fluid main-container pb-5">
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
                    path={`/competizioni/${league[0].idLeague}/match/${event.idEvent}`}
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
                      path={`/competizioni/${league[0].idLeague}/match/${pastEvent.idEvent}`}
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
                            path={`/competizioni/${league[0].idLeague}/season/${season.strSeason}`}
                            season={season.strSeason}
                          />
                        </div>
                      )
                    })}
                  </div>
                  <h6 className="text-light mt-4">Teams</h6>
                  <div className="row">
                  {teams.map((team)=>{
                    return(
                      <div className="col-3">
                        <ContainerTeams 
                        path={`/competizioni/${league[0].idLeague}/team/${team.idTeam}`}
                        img={team.strBadge}
                        nameTeam={team.strTeam}
                      />
                      </div>
                    )
                  })}
                  </div>
                 <h6 className="text-light mt-4">Trophy Icon</h6>
                 <div className="container d-flex justify-content-center">
                 <img src={league[0].strTrophy} className="img-fluid img-trophy "></img>
                 </div>
                 <h6 className="text-light mt-4">Fanart</h6>
                 <ContainerFanart 
                  img1={league[0].strFanart1}
                  img2={league[0].strFanart2}
                  img3={league[0].strFanart3}
                  img4={league[0].strFanart4}
                 />
                 <ContainerImg 
                  title='Banner'
                  img={league[0].strBanner}
                 />
                </div>
              </div>
                ): <p>Caricamento</p> }
              
            </div>
          </div>
    )
}

export default SectionCompetition