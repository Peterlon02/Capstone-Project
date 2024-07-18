import axios from 'axios'
import React  from 'react'
import { useState, useEffect } from 'react'
import CardHilights from './CardHighlights/CardHighlights'
import './HomePage.css'
import CardNews from '../News/Card_News/cardNews'

function HomePage(){
    const [articoli, setArticoli]=useState([])
    const [news, setNews]=useState([])

    const listHallOfFame=[{"strPlayer": "Andrea Drews", "strThumb": "https://www.thesportsdb.com/images/media/player/thumb/dwmkms1625473794.jpg",'anni':'37 years old', 'honours':3}, {"strPlayer": "Foluke Gunderson ","strThumb": "https://www.thesportsdb.com/images/media/player/thumb/8t2nau1625488097.jpg", 'anni':'36 years old', 'honours':3}, {"strPlayer": "Kelsey  Robinson","strThumb": "https://www.thesportsdb.com/images/media/player/thumb/plbtv61625489096.jpg", 'anni':'32 years old', 'honours':2}, {"strPlayer": " Kymberly Hill", "strThumb": "https://www.thesportsdb.com/images/media/player/thumb/fwbr1h1625475817.jpg",'anni':'34 years old', 'honours':2}, {"strPlayer": "Chiaka Ogbogu", 'anni':'29 years old', 'honours':1, "strThumb": "https://www.thesportsdb.com/images/media/player/thumb/74p9wf1625489387.jpg",},{"strPlayer": "Jordan Thompson", 'anni':'27 years old', 'honours':1,"strThumb": "https://www.thesportsdb.com/images/media/player/thumb/0f1zw81625474863.jpg",} ]
    
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

useEffect(()=>{
  const fetchArticoli =async()=>{
    try{
      const response= await axios.get('http://localhost:5000/api/articoli-pallavolo/Volleyball')
      setNews(response.data.articles)
    }catch(error){
      console.error('ERRORE', error)
    }
  }
  fetchArticoli()
}, [])
    return(
        <div className='row main-container'>
          <div className='col-6'>
              
              <div className='container-hall'>
                <h1 className='text-light pt-1'>Hall of Fame</h1>
                <div className='row'>
                  {listHallOfFame.map((player)=>{
                    return (
                      <div className='col-4 mt-2'>
                      <img className='img-fluid img-player'  src={player.strThumb}></img>
                      <h6 className='text-light'>{player.strPlayer}</h6>
                      <h6 className='text-light'>{player.anni}</h6>
                      <h6 className='text-light'>honours: {player.honours}</h6>
                    </div>
                    )
                  })}
                  
                </div>
              </div>
          </div>
          <div className='col-6 container-highlights'>
          <h1 className='text-center text-light pt-1'>Highlights</h1>
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
        <div >
        <div className='container-hall'>
                <h1 className='text-light pt-1 '>News</h1>
                <div className='row'>
                {news.slice(0,1).map((articolo, index) => (
                    <div key={index} className=' col-md-4 pt-2'>
                        <CardNews 
                            urlToImage={articolo.urlToImage}
                            title={articolo.title}
                            description={articolo.description}
                            url={articolo.url}
                        />
                    </div>))}
                    {news.slice(2).map((articolo, index) => (
                    <div key={index} className=' col-md-3 pt-2'>
                        <CardNews 
                            urlToImage={articolo.urlToImage}
                            title={articolo.title}
                            description={articolo.description}
                            url={articolo.url}
                        />
                    </div>))}
                </div>
              </div>
        </div>
        </div>
        
    )
}

export default HomePage