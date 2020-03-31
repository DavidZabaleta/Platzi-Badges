import React from 'react';

import './BadgeDetailsComponent.css';
import api from '../../api';
import PageLoading from '../../components/PageLoading/PageLoading';
import PageError from '../../components/PageError/PageError';
import BadgeDetails from '../BadgeDetails/BadgeDetails';


class BadgeDetailsComponent extends React.Component {

    state = {
        loading: true,
        error: null,
        data: {},
        modalIsOpen: false
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false });
    }

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true });
    }

    handleDeleteBadge = async () => {
        this.setState({ loading: true, error: null });

        try {
            await api.badges.remove(this.props.match.params.badgeId)
            this.setState({ loading: false});
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {

        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        return <BadgeDetails 
                    modalIsOpen={this.state.modalIsOpen} 
                    onCloseModal={this.handleCloseModal} 
                    onOpenModal={this.handleOpenModal}
                    onDeleteBadge={this.handleDeleteBadge} 
                    badge={this.state.data}
                />;
    }
}

export default BadgeDetailsComponent;
