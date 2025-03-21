import './Header.css';
import React, { useEffect, useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useUser} from '../../UserContext'
import { Button } from 'react-bootstrap';


function Header() {
    const [activeLink, setActiveLink] = useState('Home');
    const {username, setUsername}=useUser()

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    const handleLogout = () => {
        localStorage.removeItem('username');
        setUsername('');
      };


    return (
        <header className='App-header'>
            <div className='d-flex text-center justify-content-between'>
                <div></div>
                <h1>Volley Blog</h1>
                    {username==='' ?(
                        <div className='d-flex align-items-center'>
                        <Link className='text-decoration-none'>
                            <div className='style-access'>Login</div>
                        </Link>
                        <Link className='text-decoration-none' to={'/Signup'}>
                            <div className='style-access'>Signup</div>
                        </Link>
                    </div>
                    ):(
                        <div className='d-flex align items center'>
                            <div className='d-flex align-items-center style-user'>{username}</div>
                            <button variant='danger' onClick={handleLogout}>Logout</button>
                        </div>
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