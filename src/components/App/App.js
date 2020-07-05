import React, { Component } from "react";
import "./App.css";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      __isLoggedIn: false, // false,
      email: "ankorha@gmail.com",
      habits: [],
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(email, habits) {
    console.log(email);
    this.setState({
      __isLoggedIn: !this.state.__isLoggedIn,
      email: email,
      habits: habits,
    });
  }
  render() {
    return (
      <div className="App justify-content-center align-items-center">
        {this.state.__isLoggedIn ? (
          <Dashboard email={this.state.email} habits={this.state.habits} />
        ) : (
          <Login onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default App;
