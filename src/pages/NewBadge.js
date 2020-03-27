import React from 'react';
import '../pages/NewBadge.css';

import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar/Navbar';
import Badge from '../components/Badge/Badge';
import BadgeForm from '../components/BadgeForm/BadgeForm';

class NewBadge extends React.Component {
    
    state = { form: {
        firstName: '',
        lastName: '',
        jobTitle: '',
        twitter: ''
    }}

    render() {
        return (
            <div>
                <Navbar />
                <div className="NewBadge__hero">
                    <img className="img-fluid" src={header} alt="Hero" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="David"
                                lastName="Zabaleta"
                                jobTitle="Fullstack Developer"
                                twitter="David_Zabaleta" />
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewBadge;