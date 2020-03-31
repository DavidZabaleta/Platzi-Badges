import React from 'react';
import './EditBadge.css';

import header from '../../images/platziconf-logo.svg';
import Badge from '../../components/Badge/Badge';
import api from '../../api';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import PageLoading from '../../components/PageLoading/PageLoading';

class EditBadge extends React.Component {

    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        },
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({ loading: false, form: data });
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true, error: null });

        try {
            await api.badges.update(
                this.props.match.params.badgeId, 
                this.state.form
            );

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
                <div className="EditBadge__hero">
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
                                twitter={this.state.form.twitter}
                                showTwitter={{showTwitter: true}} />
                        </div>
                        <div className="col-6">
                            <h1>Editar Participante</h1>
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

export default EditBadge;