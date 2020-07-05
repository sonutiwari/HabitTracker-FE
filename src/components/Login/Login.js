import React, { Component } from "react";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      onLogin: props.onLogin
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      alert("Username and Password are required!");
      return;
    } else {
      const requestOptions = {
        method: "POST",
        cors: "no",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      };
      fetch("https://habittracker-habits.herokuapp.com/v1/user/login", requestOptions)
        .then((loginData) => loginData.json())
        .then((data) => {
          this.state.onLogin(email, data.habits);
        })
        .catch((err) => {
          console.error("Error Data", err);
        });
    }
  }
  handleChange(event) {
    const name = event.target.name;
    const newState = { ...this.state };
    newState[name] = event.target.value;
    this.setState(newState);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-xs-12 col-sm-8 col-md-6 m-auto">
          <form onSubmit={this.onSubmit}>
            <label htmlFor="email">Email*: </label>
            <input
              name="email"
              id="email"
              value={this.state.email}
              type="email"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">Password*:</label>
            <input
              name="password"
              id="password"
              value={this.state.password}
              type="password"
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" value="Login" className="btn btn-primary" />
          </form>
        </div>
      </div>
      </div>
    );
  }
}
export default Login;
