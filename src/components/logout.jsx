<<<<<<< HEAD
import { Component } from "react";
=======
import React, { Component } from "react";
>>>>>>> 718363f4217fd63d5ed783877c50235d2f20da59
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    auth.logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
