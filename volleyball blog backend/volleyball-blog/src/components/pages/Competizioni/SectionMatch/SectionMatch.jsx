import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './SectionMatch.css'
import ContainerDetails from "../SectionCompetition/ComponentsCompetition/ContainerDetails/ContainerDetails"
import ContainerImg from "../SectionCompetition/ComponentsCompetition/ContainerImg/ContainerImg"
import ContainerLink from "../SectionCompetition/ComponentsCompetition/ContainerLink/ContainerLink"

function SectionMatch(){
    const{matchId}=useParams()
    const{competitionId}=useParams()
    const [match, setMatch]=useState([])

    useEffect(()=>{
        const fetchMatch =async()=>{
          try{
            const response= await axios.get(`http://localhost:5000/api/eventdetails/`+`${matchId}`)
            setMatch(response.data.events[0])
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchMatch()
      }, [])
    
    return (
        <div className="container-fluid main-container pb-5">
            <div className="container">
            {match!=null ?(
                <div className="row pt-2">
                    <div className="col-md-3 ">
                    <h6 className="text-light ">Event</h6>
                    <div className="d-flex">
                        <Link className='text-decoration-none' to={`/competizioni/${competitionId}/team/${match.idHomeTeam}`}>
                            <h6 className='name-team'>{match.strHomeTeam}</h6>
                        </Link>
                        <div className="text-light vstyle">vs</div>
                        <Link className='text-decoration-none' to={`/competizioni/${competitionId}/team/${match.idAwayTeam}`}>
                            <h6 className='name-team'>{match.strAwayTeam}</h6>
                        </Link>
                    </div>
                    <ContainerDetails titleDetail='Date' detail={match.dateEvent}/>
                    <ContainerDetails titleDetail='Time' detail={match.strTime}/>
                    <ContainerImg title='Poster' img={match.strPoster}/>
                    <ContainerImg title='Thumb' img={match.strThumb}/>
                    <ContainerImg title='SquarePoster' img={match.strSquarePoster}/>
                    <ContainerLink title='League' name1={`/competizioni/${competitionId}`} name2={match.strLeague}/> 
                    <ContainerDetails titleDetail='Season' detail={match.strSeason}/>
                    <ContainerDetails titleDetail='Round' detail={match.intRound}/>
                    </div>
                    
                </div>
            ):<p></p>}
            
        </div>
        </div>
    )
}

export default SectionMatch