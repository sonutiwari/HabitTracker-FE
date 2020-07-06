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
    const futureHabits = this.state.habits
      .filter((habit) => Date.parse(habit.startDate) > new Date())
      .map((habit, index) => (
        <Habit
          key={`future${index}`}
          name={habit.name}
          startDate={habit.startDate}
          frequency={habit.frequency}
          isDone={false}
        />
      ));
    const currentHabits = this.state.habits
      .filter((habit) => Date.parse(habit.startDate) <= new Date())
      .map((habit, index) => (
        <Habit
          key={`current${index}`}
          name={habit.name}
          startDate={habit.startDate}
          frequency={habit.frequency}
          isDone={true}
        />
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
          <div className="col-xs-12 col-md-6">
            <h3>Upcoming Habit Tasks:</h3>
            <ul>{futureHabits}</ul>
          </div>
          <div className="col-xs-12 col-md-6">
            <h3>Ongoing Habit tasks</h3>
            <ul>{currentHabits}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
