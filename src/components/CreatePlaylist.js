import React from "react";

export default class CreatePlaylist extends React.Component {
    state = {
        formState: {
            isFormValid: true,
            isNameValid: true,
            isTextValid: true
        }
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validateInput() {
        let initialState = {
            isFormValid: true,
            isNameValid: true,
            isTextValid: true
        };

        if (!this.state.name) {
            initialState.isFormValid = false;
            initialState.isNameValid = false;
        }

        if (!this.state.description) {
            initialState.isFormValid = false;
            initialState.isTextValid = false;
        }

        this.setState({
            formState: initialState
        })

    }

    handleSubmit = e => {
        this.validateInput();
    }

    render() {
        return (
            <React.Fragment>
                <h1>Create A New Playlist</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        {!this.state.formState.isFormValid &&
                            <div>
                                <h3><span className="badge badge-pill badge-danger">Please Fill All The Input Boxes.</span>
                                </h3></div>}
                        <label>Name:</label>
                        <input onChange={this.handleChange} name="name" type="text" className={`form-control ${!this.state.formState.isNameValid && "is-invalid"}`} />
                    </div>
                    <div className="form-group">
                        <label>Type:</label>
                        <select onChange={this.handleChange} name="type" className="form-control">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                            <option value="unlisted">Unlisted</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea onChange={this.handleChange} name="description" className={`form-control ${!this.state.formState.isTextValid && "is-invalid"}`} rows="3"></textarea>
                    </div>
                    <button onClick={this.handleSubmit} type="button" className="btn btn-info">Create</button>
                </form>
            </React.Fragment>
        )
    }
}