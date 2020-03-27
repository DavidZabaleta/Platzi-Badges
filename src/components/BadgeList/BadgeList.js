import React, { Component } from 'react';

import '../BadgeList/BadgeList.css';
import twitterLogo from '../../images/twitter.svg';

export default class BadgeList extends Component {
    render() {
        return (
            <div>
                <ul className="list-unstyled">
                    {this.props.badges.map((badge) => {
                        return (
                            <li className="BadgeList__item row" key={badge.id}>
                                <img src={badge.avatarUrl} alt="Avatar" className="BadgeList__item--avatar" />
                                <div className="BadgeList__item--info">
                                    <h4>{badge.firstName} {badge.lastName}</h4>
                                    <div className="BadgeList__item--social">
                                        <img className="BadgeList__twitter--logo" src={twitterLogo} alt="Twitter Logo" />
                                        <span className="BadgeList__twitter--user">@{badge.twitter}</span>
                                    </div>
                                    <p>{badge.jobTitle}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}
