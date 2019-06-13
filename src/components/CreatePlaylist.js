import React from "react";

export default class CreatePlaylist extends React.Component {
    state ={};

    handleChange = e => {
        console.log(e.target.name,e.target.value,e.target)
    }

    handleSubmit = e => {      let name =  e.target.name
        console.log("onsubmit")
    }

    render() {
        return(
            <React.Fragment>
                <h1>Create A New Playlist</h1>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                            <input onChange={this.handleChange} name="name" type="text" className="form-control"/>
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
                        <textarea onChange={this.handleChange} name="description" className="form-control"rows="3"></textarea>
                    </div>
                    <button type="button" className="btn btn-info">Create</button>
                </form>
            </React.Fragment>
        )
    }
}