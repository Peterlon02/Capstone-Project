import axios from 'axios'
import React  from 'react'
import { useState, useEffect } from 'react'
import CardNews from './Card_News/cardNews'


function News() {
    const [articoli, setArticoli]=useState([])

useEffect(()=>{
  const fetchArticoli =async()=>{
    try{
      const response= await axios.get('http://localhost:5000/api/articoli-pallavolo/Pallavolo')
      setArticoli(response.data.articles)
    }catch(error){
      console.error('ERRORE', error)
    }
  }
  fetchArticoli()
}, [])
    return(
        <div className='row main-container'>
            {articoli.length>0 ?(
                articoli.map((articolo, index) => (
                    <div key={index} className=' col-md-4 pt-5'>
                        <CardNews 
                            urlToImage={articolo.urlToImage}
                            title={articolo.title}
                            description={articolo.description}
                            url={articolo.url}
                        />
                    </div>
                ))
            ): (
                <p>Caricamento articoli...</p>
            )

            }
        </div>
    )
}

export default News