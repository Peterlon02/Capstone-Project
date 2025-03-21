import './ContainerSignup.css'
import ComponentForm from '../ComponentForm/ComponentForm'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../../UserContext';
import { Alert } from 'react-bootstrap';

function ContainerSignup(){
    const [Username, setusername] = useState('');
    const [email, setEmail]=useState('')
    const [Password, setPassword]=useState('')
    const navigate = useNavigate();
    const {setUsername}=useUser()
    const [rememberMe, setRememberMe] = useState(false);
    const [userRegistrated, setUserRegistrated]= useState(false)

    const handleUsernameChange=(e)=>{
        setusername(e.target.value)
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    const handleSignup= async (e)=>{
        e.preventDefault();
        try{
            const formData={username: Username, email:email, password: Password}
            const response= await axios.post(`http://localhost:5000/api/user/register`, formData)

            if (response.status === 201) {
                alert('Registrazione completata!');
                setUsername(Username)
                console.log(response.data);
                if (rememberMe) {
                    localStorage.setItem('username', Username);
                  }
                  navigate(`/Home`);
              }
            if(response.status ===400){
                setUserRegistrated(true)
            }

        }catch (error) {
            if (error.response && error.response.status === 400) {
              setUserRegistrated(true);
            } else {
              alert('Errore imprevisto nella registrazione');
              console.error(error);
            }
          }
                
        
    }


    return(
        <div className="main-cont  ">
            <div className="container w-50 container-access d-flex flex-column align-items-center">
            <h4 className='text-light mb-3'>Signup</h4>
            {userRegistrated && (<div style={{ color: 'red', fontWeight: 'bold', marginTop: '1rem' }}>
                                Utente già registrato
                                    </div>)}
            <form  className='formstyle' onSubmit={handleSignup}>
                <ComponentForm title='Username' value={Username} func={handleUsernameChange}/>
                <ComponentForm title='Email' type='email' value={email} func={handleEmailChange}/>
                <ComponentForm title='Password' type='password' value={Password} func={handlePasswordChange}/>
                <div className="form-check mt-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label className="form-check-label text-light" htmlFor="rememberMe">
                        Remember me
                    </label>
                </div>
                <button type='submit' className="btn btn-primary mt-4 w-100" >Signup</button>
            </form>
            </div>

        </div>
    )
}

export default ContainerSignup