import React, { Component } from "react";
class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    this.handleDone = this.handleDone.bind(this);
  }
  handleDone(event) {
    this.setState({
      ...this.state,
      isDone: !this.state.isDone,
    });
  }
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <button 
                className={this.state.isDone ? "btn btn-primary":"btn btn-danger"} onClick={this.handleDone} >
              {this.state.isDone ? 'Mark it Done': 'Undo'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Habit;
