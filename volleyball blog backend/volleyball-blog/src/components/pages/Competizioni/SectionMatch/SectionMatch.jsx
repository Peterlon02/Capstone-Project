import { useParams } from "react-router-dom"
import React from "react"

function SectionMatch(){
    const{matchId}=useParams()
    
    return (
        <div>
            {matchId}
        </div>
    )
}

export default SectionMatch