import React from "react";
import { GoogleLogin } from "react-google-login";

class Login extends React.Component {

  googleCallback = response => {
    if (!response || !response.accessToken) {
        return alert("Sorry,google sign has failed");
    }
    let user = {
      token: response.accessToken,
      name: response.profileObj.name
    };
    localStorage.setItem("user", JSON.stringify(user));
    this.props.history.push("/app");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-danger">Login Using Google</h2>
            <div className="row">
              <div className="col-md-6">
            <GoogleLogin
              clientId="856149973585-2n8gqlu0u3utets032t8mtovo9kg2idp.apps.googleusercontent.com"
              buttonText="Sign-In"
              onSuccess={this.googleCallback}
              onFailure={this.googleCallback}
              scope = "https://www.googleapis.com/auth/youtube"
            />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;