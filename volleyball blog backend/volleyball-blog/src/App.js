import React, { useEffect, useState } from 'react';
import './App.css';
import Header from'./components/Header/Header'
import News from './components/pages/News/News';
import Home from './components/pages/HomePage/HomePage'
import Competizioni from './components/pages/Competizioni/Competizioni'
import SectionCompetition from './components/pages/Competizioni/SectionCompetition/SectionCompetition'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import SectionTeam from './components/pages/Competizioni/SectionTeam/SectionTeam'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/competizioni' element={<Competizioni/>}/>
          <Route path='/competizioni/:competitionId' element={<SectionCompetition/>}/>
          <Route path='/news' element={<News />}/>
          <Route path='/competizioni/:competitionId/:teamId' element={<SectionTeam/>}/>
        </Routes>

      </div>
    </Router>
    
    
  );
}

export default App;
