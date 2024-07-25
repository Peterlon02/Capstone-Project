import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './SectionMatch.css';
import ContainerDetails from '../SectionCompetition/ComponentsCompetition/ContainerDetails/ContainerDetails';
import ContainerImg from '../SectionCompetition/ComponentsCompetition/ContainerImg/ContainerImg';
import ContainerLink from '../SectionCompetition/ComponentsCompetition/ContainerLink/ContainerLink';
import CommentSection from '../../Competizioni/SectionMatch/CommentSection/CommentSection'
import { UserContext } from '../../../../UserContext'; // Importa il contesto

function SectionMatch() {
    const { matchId, competitionId } = useParams();
    const [match, setMatch] = useState([]);
    const { username } = useContext(UserContext);

    useEffect(() => {
        const fetchMatch = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/eventdetails/${matchId}`);
                setMatch(response.data.events[0]);
            } catch (error) {
                console.error('ERRORE', error);
            }
        };
        fetchMatch();
    }, [matchId]);

    return (
        <div className="container-fluid main-container pb-5">
            <div className="container">
                {match != null ? (
                    <div className="row pt-2">
                        <div className="col-md-3 ">
                            <h6 className="text-light">Event</h6>
                            <div className="d-flex">
                                <Link className='text-decoration-none' to={`/competizioni/${competitionId}/team/${match.idHomeTeam}`}>
                                    <h6 className='name-team'>{match.strHomeTeam}</h6>
                                </Link>
                                <div className="text-light vstyle">vs</div>
                                <Link className='text-decoration-none' to={`/competizioni/${competitionId}/team/${match.idAwayTeam}`}>
                                    <h6 className='name-team'>{match.strAwayTeam}</h6>
                                </Link>
                            </div>
                            <ContainerDetails titleDetail='Date' detail={match.dateEvent} />
                            <ContainerDetails titleDetail='Time' detail={match.strTime} />
                            <ContainerImg title='Poster' img={match.strPoster} />
                            <ContainerLink title='League' name1={`/competizioni/${competitionId}`} name2={match.strLeague} />
                            <ContainerDetails titleDetail='Season' detail={match.strSeason} />
                            <ContainerDetails titleDetail='Round' detail={match.intRound} />
                        </div>
                        <div className="col-md-9 pt-4 ">
                            <div className="container d-flex align-items-center justify-content-center">
                                <div className="d-flex flex-column  align-items-center">
                                    <img className="img-fluid img-logos" src={match.strHomeTeamBadge} alt={match.strHomeTeam} />
                                    <h6 className="text-light">{match.intHomeScore}</h6>
                                </div>
                                <div className="vstyle text-light">vs</div>
                                <div className="d-flex flex-column align-items-center">
                                    <img className="img-fluid img-logos" src={match.strAwayTeamBadge} alt={match.strAwayTeam} />
                                    <h6 className="text-light">{match.intAwayScore}</h6>
                                </div>
                            </div>
                            <ContainerImg title='Fanart' img={match.strFanart} />
                            <ContainerImg title='Banner' img={match.strBanner} />
                        </div>
                    </div>
                ) : <p></p>}
                <CommentSection username={username} /> {/* Aggiungi la sezione dei commenti */}
            </div>
        </div>
    );
}

export default SectionMatch;