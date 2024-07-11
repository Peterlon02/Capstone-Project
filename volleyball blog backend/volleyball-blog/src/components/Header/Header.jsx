import './Header.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Header(){

    return(
      <header className='App-header'>
        <div className='row text-center '>
           <h1 >Volley Blog</h1>
        </div>
        <div className=' row'>
          <div className='col-md-2 section'>
            <Link to='/' className='nav-link' >Home</Link>
          </div>
          <div className='col-md-2 section'>
            <Link to='/competizioni' className='nav-link' >Competizioni</Link>
          </div>
          <div className='col-md-2 section'>
            <Link to='/news' className='nav-link ' >News </Link>
          </div>
        </div>
      </header>
    )
}

export default Header;
