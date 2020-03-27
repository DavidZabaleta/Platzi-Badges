import React from 'react';

import './NotFound.css';
import astronaut from '../../images/astronaut.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="NotFound">
            <img src={astronaut} alt="Astronauta"/>
            <section className="NotFound__text">
                <h1>404</h1>
                <h1>PAGINA NO ENCONTRADA</h1>
                <p>En este mar de estrellas no está lo que buscas</p>
                <Link to="/" className="btn btn-primary">Ir al inicio</Link>
            </section>
        </div>
    )
}

export default NotFound;
