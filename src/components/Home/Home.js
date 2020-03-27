import React from 'react';

import './Home.css';
import platziconf from '../../images/platziconf-logo.svg';
import astronauts from '../../images/astronauts.svg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="Home">
            <section className="Home__description">
                <img id="platziconf-logo" src={platziconf} alt="PlatziConf Logo" />
                <div className="Home__description--text">
                    <h1>IMPRIME TUS BADGES</h1>
                    <p>La forma mas sencilla de administrar tu conferencia</p>
                    <Link to="/badges" className="btn btn-primary">Comienza ahora!</Link>
                </div>
            </section>
            <section className="Home__complement">
                <img id="astronauts" src={astronauts} alt="Astronautas" />
            </section>
        </div>
    )
}

export default Home;
