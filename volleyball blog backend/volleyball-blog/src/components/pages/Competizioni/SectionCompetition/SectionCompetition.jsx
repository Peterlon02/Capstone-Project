import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import allEvents from './dictEvents/dictEvents'

function SectionCompetition(){
    const {competitionId}=useParams()/* Id della competizione */
    const [teams, setTeams]=useState([])/* teams di quella competizione */
    const [seasons, setSeasons]=useState([])/*lista delle seasons di  quella competizione */
    const [eventsByRound, setEventsByRound] = useState({});/*giornate della season(DA RIVEDERE MEGLIO PERCHE' SONO SBALLATE) */

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

    return (
          <div>Ciao</div>
    )
}

export default SectionCompetition