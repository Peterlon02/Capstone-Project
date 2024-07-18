import './ContainerSignup.css'
import ComponentForm from '../ComponentForm/ComponentForm'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ContainerSignup(){
    const [Username, setUsername] = useState('');
    const [email, setEmail]=useState('')
    const [Password, setPassword]=useState('')
    const navigate = useNavigate();

    const handleUsernameChange=(e)=>{
        setUsername(e.target.value)
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    const handleSignup=(e)=>{
        e.preventDefault();
        navigate(`/?username=${encodeURIComponent(Username)}`);
    }


    return(
        <div className="main-cont  ">
            <div className="container w-50 container-access d-flex flex-column align-items-center">
            <h4 className='text-light mb-3'>Signup</h4>
            <form  className='formstyle' onSubmit={handleSignup}>
                <ComponentForm title='Username' value={Username} func={handleUsernameChange}/>
                <ComponentForm title='Email' type='email' value={email} func={handleEmailChange}/>
                <ComponentForm title='Password' type='password' value={Password} func={handlePasswordChange}/>
                <button type='submit' className="btn btn-primary mt-3" >Signup</button>
            </form>
            </div>

        </div>
    )
}

export default ContainerSignup