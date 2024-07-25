import './Header.css';
import React, { useEffect, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {UserContext} from '../../UserContext'


function Header() {
    const location = useLocation();
    const { username, setUsername } = useContext(UserContext);
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const usernameParam = params.get('username');
        if (usernameParam) {
            setUsername(usernameParam);
        }
    }, [location.search, setUsername]);

    return (
        <header className='App-header'>
            <div className='d-flex text-center justify-content-between'>
                <div></div>
                <h1>Volley Blog</h1>
                {username === 'Login' ? (
                    <div className='d-flex align-items-center'>
                        <Link className='text-decoration-none'>
                            <div className='style-access'>{username}</div>
                        </Link>
                        <Link className='text-decoration-none' to={'/Signup'}>
                            <div className='style-access'>Signup</div>
                        </Link>
                    </div>
                ) : (
                    <div className='d-flex align-items-center style-user'>{username}</div>
                )}
            </div>
            <div className='row'>
                <div className='col-md-2 section'>
                    <Link
                        to='/'
                        className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('Home')}
                    >
                        <div className='style-link'>Home</div>
                    </Link>
                </div>
                <div className='col-md-2 section'>
                    <Link
                        to='/competizioni'
                        className={`nav-link ${activeLink === 'Competizioni' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('Competizioni')}
                    >
                        <div className='style-link'>Competizioni</div>
                    </Link>
                </div>
                <div className='col-md-2 section'>
                    <Link
                        to='/news'
                        className={`nav-link ${activeLink === 'News' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('News')}
                    >
                        <div className='style-link'>News</div>
                    </Link>
                </div>
                <div className='col-md-2 section'>
                    <Link
                        to='/chi-siamo'
                        className={`nav-link ${activeLink === 'Chi siamo' ? 'active' : ''}`}
                        onClick={() => handleLinkClick('Chi siamo')}
                    >
                        <div className='style-link'>Chi Siamo</div>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;