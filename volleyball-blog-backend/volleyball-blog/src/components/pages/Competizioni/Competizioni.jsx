import axios from 'axios'
import React  from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import CardCompetition from './CardCompetition/CardCompetition'
import './Competizioni.css'

function Competizioni(){
    const [leagues, setLeagues]=useState([])

    useEffect(()=>{
        const fetchLeagues =async()=>{
          try{
            const response= await axios.get(`${process.env.REACT_APP_API_URL}/api/leagues`)
            setLeagues(response.data.countries)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchLeagues()
      }, [])

    return(
        <div className='main-container'>
          <div className='container pt-3 '>
            <h5 className='text-light'>Division 1</h5>
            <div className='row'>
            {leagues.slice(0,7).map((league) => (
                <div className='col-sm-6 col-lg-3 col-md-4 p-2' >
                   <CardCompetition 
                    idLeague={league.idLeague}
                    strLeague={league.strLeague}
                    strBadge={league.strBadge}
                    strDescriptionEN={league.strDescriptionEN}
                   /> 
                </div>
            ))};
            </div>
            <h5 className='text-light pt-4'>Cup Competition </h5>
            <div className='row'>
            {leagues.slice(7).map((league) => (
                <div className='col-sm-6 col-lg-3 col-md-4 p-2' >
                   <CardCompetition 
                    idLeague={league.idLeague}
                    strLeague={league.strLeague}
                    strBadge={league.strBadge}
                    strDescriptionEN={league.strDescriptionEN}
                   /> 
                </div>
            ))};
            </div>
          </div>
        </div>
    )
}

export default Competizioni


