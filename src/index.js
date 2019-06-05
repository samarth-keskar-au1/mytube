import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store.js';
import {TrendingVideos} from './components/TrendingVideos.js'

class App extends React.Component {
    render(){
        return(
            <Provider store = {store}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2">

                        </div>
                        <div className="col-md-10">
                                <TrendingVideos/>
                        </div>
                    </div>
                </div>
           </Provider>
        );
    }style
}

ReactDOM.render(<App/>,document.getElementById("root"));