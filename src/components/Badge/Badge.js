import React from 'react';

import '../Badge/Badge.css';
import logoConf from '../../images/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <header className="Badge__header">
                    <img src={logoConf} alt="Logo conferencia" />
                </header>
                <section className="Badge__section--name">
                    <img className="Badge__avatar" src="https://www.gravatar.com/avatar/94d093eda664addd6e450d7e9881bcad?s=32&d=identicon&r=PG" alt="Avatar" />
                    <h1>{(this.props.firstName === '') ? 'Nombre' : this.props.firstName}
                        <br/>{(this.props.lastName === '') ? 'Apellido' : this.props.lastName}
                    </h1>
                </section>
                <div className="Badge__section--info">
                    <h3>{(this.props.jobTitle === '') ? 'Profesión': this.props.jobTitle}</h3>
                    {/* <img src="" alt="Twitter" /> */}
                    <div>{(this.props.twitter === '') ? 'Usuario en Twitter' : `@${this.props.twitter}`}</div>
                    {/* <img src="" alt="Pais" /> */}
                </div>
                <footer className="Badge__footer">
                    <p>#PlatziConf</p>
                </footer>
            </div>
        );
    }
}

export default Badge;
