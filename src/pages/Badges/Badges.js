import React, { Component } from 'react';
import '../Badges/Badges.css';
import { Link } from 'react-router-dom';

import confLogo from '../../images/badge-header.svg';
import BadgeList from '../../components/BadgeList/BadgeList';
import api from '../../api';
import PageLoading from '../../components/PageLoading/PageLoading';
import PageError from '../../components/PageError/PageError';

export default class Badges extends Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    constructor(props) {
        super(props);

        console.log("1. Constructor"); 
    }

    componentWillMount() {
        console.log("2. componentWillMount");
    } 

    componentDidMount() {
        console.log("4. componentDidMount, mejor parte donde llamar la API");

        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 50000);
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data });
        } catch(e) {
            this.setState({ loading: false, error: e});
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('6. componentDidUpdate');
        console.log(
            {prevProps: prevProps, prevState: prevState}
        );
        console.log(
            {
                props: this.props,
                state: this.state
            }
        );
        
        
    }
    
    componentWillUnmount() {
        console.log('7. componentWillUnmount');
        
        clearTimeout(this.intervalId);
    }

    render() {
        console.log("3/5. render");

        if (this.state.loading && !this.state.data) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }
        
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges__conf--logo" src={confLogo} alt="Conf Logo" />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">Nuevo Badge</Link>
                    </div>
                </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                        <BadgeList badges={this.state.data}/>
                    </div>
                </div>
            </React.Fragment>
        );
    };
}
