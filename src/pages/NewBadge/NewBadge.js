import React from 'react';
import '../NewBadge/NewBadge.css';

import header from '../../images/platziconf-logo.svg';
import Badge from '../../components/Badge/Badge';
import api from '../../api';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import PageLoading from '../../components/PageLoading/PageLoading';

class NewBadge extends React.Component {

    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true, error: null });

        try {
            await api.badges.create(this.state.form);
            this.setState({ loading: false });

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />;
        }

        return (
            <React.Fragment>
                <div className="NewBadge__hero">
                    <img className="img-fluid" src={header} alt="Hero" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                twitter={this.state.form.twitter} />
                        </div>
                        <div className="col-6">
                            <h1>Nuevo Participante</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                                redirect={this.state.redirect} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default NewBadge;