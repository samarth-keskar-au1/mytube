import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store/store.js';
import {Menu} from './Menu.js';
import {Trending} from './Trending.js';
import {Search} from './Search.js';
import {SingleVideo} from './SingleVideo.js';
import Profile from './Profile.js';
import Logout from './Logout.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
    render(){
        return(
            <Provider store = {store}>
                <div className="container-fluid">
                    <div className="row">
                    
                        <div className="col-md-2">
                            <Menu/>
                        </div>
                       
                        <div className="col-md-10">

                            <Route path = "/app" exact = {true} component= {Trending} />
                            <Route path = "/app/search"component= {Search} />
                            <Route path = "/app/video/:videoId" component= {SingleVideo} />
                            <Route path="/app/profile" component={Profile} />
                            <Route path="/app/logout" component={Logout} />
                            
                        </div>
                    </div>
                </div>
              
           </Provider>
        );
    }
}

export default App;


