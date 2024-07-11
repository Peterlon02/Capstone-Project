import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='App-header'>
            <div className='container'>
                <div className='row justify-content-center text-center'>
                    <h1>Volley Blog</h1>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-4 col-md-2 text-center'>
                        <Link to='/' className='nav-link'>Home</Link>
                    </div>
                    <div className='col-4 col-md-2 text-center'>
                        <Link to='/competizioni' className='nav-link'>Competizioni</Link>
                    </div>
                    <div className='col-4 col-md-2 text-center'>
                        <Link to='/news' className='nav-link'>News</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;


CSS
.App-header {
    background-color: #008080; /* Un colore più professionale */
    color: #fff; /* Testo bianco per contrasto */
    padding: 20px 0; /* Padding superiore e inferiore */
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombra per effetto di profondità */
}

h1 {
    font-family: 'Arial', sans-serif; /* Font pulito e leggibile */
    font-size: 2.5rem; /* Dimensione del testo del titolo */
    margin: 0;
}

.nav-link {
    color: #fff; /* Colore del testo bianco */
    font-size: 1.25rem; /* Dimensione del testo */
    text-decoration: none; /* Rimuovere la sottolineatura */
    transition: color 0.3s ease; /* Transizione per il cambio di colore */
}

.nav-link:hover {
    color: #ffd700; /* Cambiare colore al passaggio del mouse */
}

@media (min-width: 768px) {
    h1 {
        font-size: 3rem; /* Dimensione del testo del titolo per schermi più grandi */
    }

    .nav-link {
        font-size: 1.5rem; /* Dimensione del testo per i link per schermi più grandi */
    }
}