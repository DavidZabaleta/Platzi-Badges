import React from 'react';

class BadgeForm extends React.Component {

    handleClick = (e) => {
        console.log("clickeado");
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Nuevo Participante</h1>
                <form onSubmit={this.handleSubmit}>
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
                </form>
            </div>
        )
    }
}

export default BadgeForm;