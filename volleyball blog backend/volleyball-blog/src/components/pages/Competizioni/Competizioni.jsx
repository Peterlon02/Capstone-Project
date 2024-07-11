import axios from 'axios'
import React  from 'react'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import CardCompetition from './CardCompetition/CardCompetition'

function Competizioni(){
    const [leagues, setLeagues]=useState([])

    useEffect(()=>{
        const fetchLeagues =async()=>{
          try{
            const response= await axios.get('http://localhost:5000/api/leagues')
            setLeagues(response.data.countries)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchLeagues()
      }, [])

    return(
        <div className='row'>
            {leagues.map((league) => (
                <div className='col-3 p-2'>
                   <CardCompetition 
                    idLeague={league.idLeague}
                    strLeague={league.strLeague}
                    strBadge={league.strBadge}
                    strDescriptionEN={league.strDescriptionEN}
                   /> 
                </div>
            ))};
        </div>
    )
}

export default Competizioni