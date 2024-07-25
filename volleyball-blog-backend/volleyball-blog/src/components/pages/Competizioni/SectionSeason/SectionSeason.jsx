import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";

import axios from "axios";
import ContainerDetails from "../SectionCompetition/ComponentsCompetition/ContainerDetails/ContainerDetails";
import { Link } from "react-router-dom";
import ContainerLink from "../SectionCompetition/ComponentsCompetition/ContainerLink/ContainerLink";
import ContainerFanart from "../SectionCompetition/ComponentsCompetition/ContainerFanart/ContainerFanart";
import ContainerImg from "../SectionCompetition/ComponentsCompetition/ContainerImg/ContainerImg";
import ContainerNext from "../SectionCompetition/ComponentsCompetition/ContainerNext/ContainerNext";



function SectionSeason(){

    const {seasonId}=useParams()
    const {competitionId}=useParams()
    const [season, setSeason]=useState([])
    const [league, setLeague]=useState([])

    useEffect(()=>{
        const fetchSeason =async()=>{
          try{
            const response = await axios.get('http://localhost:5000/api/event/'+ `${competitionId}/`+  `${seasonId}`);
            setSeason(response.data.events)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchSeason()
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


    return(
        <div className="container-fluid main-container pb-5">
            <div className="container"> 
                     {league.length>0 ? (
                        <div className="row pt-2">
                        <div className="col-md-3 ">
                            <ContainerLink title={'Competitions'}
                                name2={league[0].strLeague}
                                name1={'/competizioni/'+`${competitionId}`}
                            />
                            <ContainerImg title='Badge' img={league[0].strBadge}/>
                            <ContainerDetails titleDetail='Season' detail={seasonId}/>
                        </div>
                        <div className="col-md-9">
                            <h6 className="text-light mt-4">Event List</h6>
                            {(season).map((event)=>{
                                    return(
                                        <ContainerNext 
                                        path={`/competizioni/${competitionId}/match/${event.idEvent}`}
                                        date={event.dateEvent}
                                        homename={event.strHomeTeam}
                                        homebadge={event.strHomeTeamBadge}
                                        awayname={event.strAwayTeam}
                                        awaybadge={event.strAwayTeamBadge}
                                        time={event.strTime}
                                        homeresult={event.intHomeScore}
                                        awayresult={event.intAwayScore}
                                        />
                                    )
                                })
                            }
                        </div>
                </div> 
                     ):<p>Caricamento</p>}
            </div>
        </div>
    )
}

export default SectionSeason