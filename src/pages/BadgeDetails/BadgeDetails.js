import React, { useState } from 'react';

import './BadgeDetails.css';
import logoConf from '../../images/platziconf-logo.svg';
import Badge from '../../components/Badge/Badge';
import { Link } from 'react-router-dom';
import DeleteBadgeModal from '../../components/DeleteBadgeModal/DeleteBadgeModal';

const useIncreaseCount = (max) => {
    const [count, setcount] = useState(0);

    if (count > max) {
        setcount(0)
    }

    return [count, setcount];
}

const BadgeDetails = (props) => {
    const [count, setCount] = useIncreaseCount(4);

    return (
        <React.Fragment>
            <button onClick={() => setCount(count + 1)} className="btn btn-primary mr-4">Incrase Account {count}</button>
            
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={logoConf} alt="Logo Conferencia" />
                        </div>
                        <div className="BadgeDetails__hero-attendant-name col-6">
                            <h1>{props.badge.firstName} {props.badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-6 mb-3">
                        <Badge
                            firstName={props.badge.firstName}
                            lastName={props.badge.lastName}
                            jobTitle={props.badge.jobTitle}
                            email={props.badge.email}
                            twitter={props.badge.twitter}
                            showTwitter={{ showTwitter: true }}
                        />
                    </div>
                    <div className="BadgeDetails__buttons col-6">
                        <h2>Actions</h2>
                        <div>
                            <Link id="element" className="btn btn-primary" to={`/badges/${props.badge.id}/edit`} >Editar</Link>
                        </div>
                        <div>
                            <button id="element" onClick={props.onOpenModal} className="btn btn-danger">Eliminar</button>
                            <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BadgeDetails;
