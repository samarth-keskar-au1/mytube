import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {stateMapper} from '../store/store.js'


class MenuComponent extends React.Component {

    componentDidMount() {
        this.props.dispatch({
            type:"FETCH_PLAYLISTS"
        })
    }
    render() {
        return(
            <div>
              <h4 className="m-1">MyTube</h4>
            <hr/>
                <ul className="list-group">
                    <li className="list-group-item active">Menu</li>
                    <li className="list-group-item"> <Link to="/app">Trending</Link> </li>
                    <li className="list-group-item"> <Link to="/app/search">Search</Link> </li>
                    <li className="list-group-item active"> My Playlists </li>
                    {this.props.playlists.map(p => (
                    <li key={p.etag} className="list-group-item"><Link to={`/app/playlists/${p.id}`}>{p.snippet.title}</Link></li>
                    ))}
                    <li className="list-group-item"> <Link to="/app/playlist/create">Create Playlist</Link> </li>
                    <li className="list-group-item active"> My Profile </li>
                    <li className="list-group-item"><Link to="/app/profile">Profile</Link></li>
                    <li className="list-group-item"><Link to="/app/logout">Logout</Link> </li>
                </ul>
            </div>
        )
    }
}

let Menu = connect(stateMapper)(MenuComponent);

export {Menu}