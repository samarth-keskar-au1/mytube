import React from "react";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  render() {
    localStorage.removeItem("user");
    return (
      <div>
        we feel bad to see you go....
        <Redirect to="/login" />
      </div>
    );
  }
}
export default Logout;