import React, { Component } from "react";
class Habit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
          <div className="card-body">
    <h5 className="card-title">{this.props.name}</h5>
            <a href="#" className="btn btn-primary">
              Mark it Done
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Habit;
