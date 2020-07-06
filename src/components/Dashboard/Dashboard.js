import React, { Component } from "react";
import HabitForm from "../Habit/Form/HabitForm";
import Habit from "../Habit/Habit";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      habits: props.habits,
      showCreateHabit: false,
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleShowButtonClick = this.handleShowButtonClick.bind(this);
  }
  handleFormSubmit(habit) {
    console.log(habit);
    this.setState({
      ...this.state,
      showCreateHabit: !this.state.showCreateHabit,
      habits: [...this.state.habits, habit],
    });
  }
  handleShowButtonClick(event) {
    this.setState({
      ...this.state,
      showCreateHabit: !this.state.showCreateHabit,
    });
  }
  render() {
    console.log(this.state.habits);
    const elements = this.state.habits.map((habit, index) => (
      <Habit key={index} name={habit.name} />
    ));
    return (
      <div className="container">
        <div className="row">
          <h1 className="m-auto">DashBoard</h1>
        </div>
        <div className="row">
          <div className="col-sm-4 m-auto">
            <button
              className="btn btn-success"
              onClick={this.handleShowButtonClick}
            >
              Create New Habit
            </button>
          </div>
        </div>
        {this.state.showCreateHabit ? (
          <div className="row">
            <HabitForm
              email={this.state.email}
              onHabitAdd={this.handleFormSubmit}
            />
          </div>
        ) : (
          ""
        )}
        <div className="row m-auto">
          <ul>{elements}</ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
