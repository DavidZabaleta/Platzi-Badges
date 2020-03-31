import React from 'react';

import '../Badge/Badge.css';
import logoConf from '../../images/badge-header.svg';
import twitterLogo from '../../images/twitter.svg';
import Gravatar from '../Gravatar/Gravatar';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <header className="Badge__header">
                    <img src={logoConf} alt="Logo conferencia" />
                </header>
                <section className="Badge__section--name">
                    <Gravatar className="Badge__avatar" email={this.props.email} alt={`${this.props.firstName} ${this.props.lastName}`} />
                    <h1>{(this.props.firstName === '') ? 'Nombre' : this.props.firstName}
                        <br />{this.props.lastName || 'Apellido'}
                    </h1>
                </section>
                <div className="Badge__section--info">
                    <h3>{this.props.jobTitle || 'Profesión'}</h3>
                    {/* <img src="" alt="Twitter" /> */}
                    {this.props.showTwitter
                        ?   <a href={`https://twitter.com/${this.props.twitter}`} target="_blank" rel="noopener noreferrer">
                                <div>                                    
                                    <img className="BadgeList__twitter--logo" src={twitterLogo} alt="Twitter Logo" />
                                    <span>@{this.props.twitter}</span>
                                </div>
                            </a>
                        :   <div>{(this.props.twitter === '') ? 'Usuario en Twitter' : `@${this.props.twitter}`}</div>
                    }
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
