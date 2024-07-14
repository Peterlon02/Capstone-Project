import React from "react"
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import './SectionTeam.css'

function SectionTeam(){
    
    const {teamId}=useParams()

    const [players, setPlayers]=useState([])

    useEffect(()=>{
        const fetchPlayers =async()=>{
          try{
            const response= await axios.get('http://localhost:5000/api/player/'+ `${teamId}`)
            setPlayers(response.data.player)
            console.log('http://localhost:5000/api/player/'+ `${teamId}`)
          }catch(error){
            console.error('ERRORE', error)
          }
        }
        fetchPlayers()
      }, [teamId])
    return(
        <div className="">
            {teamId}
        </div>
    )
}

export default SectionTeam;