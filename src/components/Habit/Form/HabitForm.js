import React, { Component } from "react";
class HabitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      frequency: "1",
      name: "",
      startDate: "",
      time: "",
      onHabitAdd: props.onHabitAdd,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(event) {
    const newState = {
      ...this.state,
    };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const state = this.state;
    const requestOptions = {
      method: "POST",
      cors: "no",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ...state,
      }),
    };
    fetch("https://habittracker-habits.herokuapp.com/v1/habit/create", requestOptions)
      .then((response) => {
        this.state.onHabitAdd({
            ...this.state
        });
        this.setState({
          ...this.state,
          frequency: "1",
          name: "",
          startDate: "",
          time: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit} method="POST">
        <label htmlFor="name">Habit Name*</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
        />
        <br />
        <label htmlFor="startDate">Start Date:*</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          value={this.state.startDate}
          onChange={this.handleInputChange}
          required
        />
        <br />
        <label htmlFor="frequency">Frequency:*</label>
        <select
          value={this.frequency}
          name="frequency"
          onChange={this.handleInputChange}
          required
        >
          <option value="1">Every 1 Day</option>
          <option value="2">Every 2 Days</option>
          <option value="3">Every 3 Days</option>
          <option value="4">Every 4 Days</option>
          <option value="5">Every 5 Days</option>
          <option value="6">Every 6 Days</option>
          <option value="7">Every Week</option>
        </select>
        <br />
        <label htmlFor="time">Reminder Time:*</label>
        <input
          type="time"
          value={this.state.time}
          id="time"
          name="time"
          onChange={this.handleInputChange}
          required
        />
        <br />
        <input
          type="submit"
          className="btn btn-primary"
          value="Create Habit"
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

export default HabitForm;
