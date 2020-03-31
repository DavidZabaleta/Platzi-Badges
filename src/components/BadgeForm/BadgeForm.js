import React from 'react';

import PageError from '../../components/PageError/PageError';

class BadgeForm extends React.Component {

    handleClick = (e) => {
        console.log("clickeado");
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>Primer Nombre</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName} />
                    </div>
                    <div className="form-group">
                        <label>Apellido</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="email"
                            name="email"
                            value={this.props.formValues.email} />
                    </div>
                    <div className="form-group">
                        <label>Profesión</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle} />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="twitter"
                            value={this.props.formValues.twitter} />
                    </div>
                    <button
                        onClick={this.handleClick}
                        className="btn btn-primary">Guardar</button>

                    {this.props.error && (
                        <p className="text-danger"><br/>500: Error del servidor. No eres tu somos nosotros <span>😢</span></p>
                    )}

                </form>
            </React.Fragment>
        )
    }
}

export default BadgeForm;