import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import App from "./components/App.js";
import Login from "./components/Login.js";

class Home extends React.Component {
     redirectUser() {
        let User = localStorage.getItem("user");
        return !User ?  <Redirect to="/Login" /> : <Redirect to="/app" /> ;
    }
    render(){
     return(
            <Router>
                <Route path="/app" component={App} />
                <Route path="/login" component={Login} />
                {this.redirectUser()}
            </Router>
        );
    }
}

ReactDOM.render(<Home/>,document.getElementById("root"));