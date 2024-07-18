import './Header.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';

function Header(){
    const [login, setLogin]=useState('Login')
    const {username}=useParams()
    const location = useLocation();

    useEffect(() => {
      // Check if username is present in URL query params
      const params = new URLSearchParams(location.search);
      const usernameParam = params.get('username');
      
      if(usernameParam){
          setLogin(usernameParam);
      }
  }, [location.search]);
    
    return(
      <header className='App-header'>
        <div className='d-flex text-center justify-content-between'>
           <div></div>
           <h1 >Volley Blog</h1>
           {login==='Login' ?(
              <div className='d-flex align-items-center'>
              <Link className='text-decoration-none'>
                <div className='style-access'>{login}</div>
              </Link>
              <Link className='text-decoration-none' to={'/Signup'}>
                <div className='style-access'>Signup</div>
              </Link>
           </div>
           ):<div className='d-flex align-items-center style-user'>{login}</div>
         }

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
