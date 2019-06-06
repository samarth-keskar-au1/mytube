import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {stateMapper} from '../store/store.js'


class MenuComponent extends React.Component {
    render() {
        return(
            <div>
            <h1 className= "display-4">MyTube</h1>
            <hr/>
                <ul className="list-group">
                    <li className="list-group-item active">Menu</li>
                    <li className="list-group-item"> <Link to="/">Trending</Link> </li>
                    <li className="list-group-item"> <Link to="/search">Search</Link> </li>
                </ul>
            </div>
        )
    }
}

let Menu = connect(stateMapper)(MenuComponent);

export {Menu}