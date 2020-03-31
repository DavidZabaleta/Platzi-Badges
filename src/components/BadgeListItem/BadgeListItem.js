import React from 'react';

import './BadgeListItem.css';
import twitterLogo from '../../images/twitter.svg';
import Gravatar from '../Gravatar/Gravatar';

class BadgeListItem extends React.Component {
    render() {
        return (
            <li className="BadgeList__item row" key={this.props.badge.id}>
                <Gravatar email={this.props.badge.email} className="BadgeList__item--avatar" alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`} />
                <div className="BadgeList__item--info">
                    <h4>{this.props.badge.firstName} {this.props.badge.lastName}</h4>
                    <div className="BadgeList__item--social">
                        <img className="BadgeList__twitter--logo" src={twitterLogo} alt="Twitter Logo" />
                        <span className="BadgeList__twitter--user">@{this.props.badge.twitter}</span>
                    </div>
                    <p>{this.props.badge.jobTitle}</p>
                </div>
            </li>
        );
    }
}

export default BadgeListItem;
