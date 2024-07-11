import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import allEvents from './dictEvents/dictEvents'

function SectionCompetition(){
    const {competitionId}=useParams()
    const [teams, setTeams]=useState([])
    const [choise, setChoise]=useState('')
    const [seasons, setSeasons]=useState([])
    const [choiseSeason, setChoiseSeason] = useState('');
    const [eventsByRound, setEventsByRound] = useState({});

  useEffect(() => {
    const getEvents = async () => {
      const data = await allEvents(choiseSeason,competitionId );
      setEventsByRound(data);
    };

    getEvents();
  }, [competitionId, choiseSeason]);

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
      }, [competitionId])

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

    const handleTeamsClick=()=>{
      setChoise('teams')
    }

    const handleEventClick=()=>{
      setChoise('event')
    }

    const handleSeasonClick=(season)=>{
      setChoiseSeason(season)
    }

    return (
        <div>
          <div className="row ">
            <div className="col-6">
            <button onClick={handleTeamsClick} className="w-100 ">Teams</button>
            </div>
            <div className="col-6 ">
            <button onClick={handleEventClick} className="w-100" >Eventi</button>
            </div>
          </div>
          {choise === 'teams' && (
          <div className="row">
            {teams.map((team)=>(
              <div className="col-3 pt-3">
                <Link to={`/competizioni/${competitionId}/${team.idTeam}`}>
                <div className="card">
                 <h1>{team.strTeam}</h1>
                 <img className="img-fluid" src={team.strBadge}></img>
                </div>
                </Link>
              </div>
            ))}
          </div>
          )}
          {choise=='event' && (
            <div>
              <div className="row">
              {seasons.map((season)=>(
                <div className="col-3 text-center">
                  <button onClick={() => handleSeasonClick(season.strSeason)}>
                    {season.strSeason}
                  </button>
                </div>
              ))}
            </div>
            <div className="row">
              <h1 className="text-center">{choiseSeason}</h1>
              {Object.keys(eventsByRound).map(round=>(
                <div className="col-4 ">
                  <h2 className="text-center">Giornata {(round)}</h2>
                  {eventsByRound[round].map(event=>(
                    <p className="text-center">{event.strHomeTeam} {event.intHomeScore} - {event.intAwayScore} {event.strAwayTeam}</p>
                  ))}
                </div>
              ))}
            </div>
            </div>
            
          )}
        </div>
    )
}

export default SectionCompetition