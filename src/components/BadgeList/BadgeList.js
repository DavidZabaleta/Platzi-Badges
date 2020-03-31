import React, { Component, useState, useMemo } from 'react';

import { Link } from 'react-router-dom';
import BadgeListItem from '../BadgeListItem/BadgeListItem';

const useSearchBadges = (badges) => {
    const [query, setQuery] = useState("");
    const [filteredBadges, setFilteredBadges] = useState(badges);

    useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.fisrtName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        })

        setFilteredBadges(result);
    }, [badges, query]);

    return [query, setQuery, filteredBadges];
}

const BadgeList = (props) => {
    const badges = props.badges;   

    const [query, setQuery, filteredBadges] = useSearchBadges(badges);

    if (filteredBadges.size === 0) {
        return (
            <React.Fragment>
                <div className="form-group">
                    <label>Filtrar Badges</label>
                    <input type="text" className="form-control" value={query} onChance={
                        e => setQuery(e.target.value)
                    } />
                </div>
                <div>
                    <h1>No hay badges creados</h1>
                    <Link className="btn btn-primary" to="/badges/new">
                        Crea un badge
                    </Link>
                </div>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className="form-group">
                <label>Filtrar Badges</label>
                <input type="text" className="form-control" value={query} onChange={
                    (e) => {setQuery(e.target.value)}
                } />
            </div>
            <ul className="list-unstyled">
                {filteredBadges.map((badge) => {
                    return (
                        <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none" >
                            <BadgeListItem badge={badge} />
                        </Link>
                    );
                })}
            </ul>
        </React.Fragment>
    )
}

export default BadgeList;
