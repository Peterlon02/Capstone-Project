import axios from 'axios'
import React  from 'react'
import { useState, useEffect } from 'react'
import CardHilights from './CardHighlights/CardHighlights'

function HomePage(){
    const [articoli, setArticoli]=useState([])
    
useEffect(()=>{
  const fetchArticoli =async()=>{
    try{
      const response= await axios.get('http://localhost:5000/api/highlights')
      const filteredArticoli= response.data.tvhighlights.filter(articolo => articolo.strThumb  !=="")
      setArticoli(filteredArticoli)
    }catch(error){
      console.error('ERRORE', error)
    }
  }
  fetchArticoli()
}, [])
    return(
        <div className='row'>
          <div className='col-6'></div>
          <div className='col-6'>
          <h1 className='text-center pt-1'>Highlights</h1>
          <div className='row '>
            {articoli.length>0 ?(
                articoli.map((articolo, index) => (
                    <div key={index} className='col-sm-6 col-md-4 pt-5'>
                        <CardHilights 
                          image={articolo.strThumb}
                          video={articolo.strVideo}
                        />
                    </div>
                ))
            ): (
                <p>Caricamento articoli...</p>
            )

            }
          </div>
        </div>
        </div>
        
    )
}

export default HomePage