import React, { useEffect, useState } from 'react';
import './App.css';
import Header from'./components/Header/Header'
import News from './components/pages/News/News';
import Home from './components/pages/HomePage/HomePage'
import Competizioni from './components/pages/Competizioni/Competizioni'
import SectionCompetition from './components/pages/Competizioni/SectionCompetition/SectionCompetition'
import { BrowserRouter as Router,Routes, Route, useLocation} from 'react-router-dom';
import SectionTeam from './components/pages/Competizioni/SectionTeam/SectionTeam'
import SectionSeason from './components/pages/Competizioni/SectionSeason/SectionSeason'
import SectionMatch from './components/pages/Competizioni/SectionMatch/SectionMatch'
import SectionPlayer from './components/pages/Competizioni/SectionPlayer/SectionPlayer'
import Signup from './components/Header/ContainerSignup/ContainerSignup'
import ChiSiamo from './components/pages/chiSiamo/chiSiamo'
import { UserProvider } from './UserContext';
function AppContent() {
  const location = useLocation();
  const nascondiHeader = ['/Signup'];

  return (
    <div>
      {!nascondiHeader.includes(location.pathname) && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/competizioni' element={<Competizioni />} />
        <Route path='/competizioni/:competitionId' element={<SectionCompetition />} />
        <Route path='/news' element={<News />} />
        <Route path='/competizioni/:competitionId/team/:teamId' element={<SectionTeam />} />
        <Route path='/competizioni/:competitionId/season/:seasonId' element={<SectionSeason />} />
        <Route path='/competizioni/:competitionId/match/:matchId' element={<SectionMatch />} />
        <Route path='/competizioni/:competitionId/player/:playerId' element={<SectionPlayer />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path="/chi-siamo" element={<ChiSiamo />} />
      </Routes>
    </div>
  );
}


function App() {
  return(
    
      <Router >
        <UserProvider>
        <AppContent/>
        </UserProvider>
      </Router>
  )
}

export default App;
