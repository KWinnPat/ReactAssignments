import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 1 ? prevState.count - 1 : 1,
    }));
  };

  render() {
    return (
      <div className="widget counter-widget">
        <h2>Counter</h2>
        <div className="counter-display">{this.state.count}</div>
        <div className="button-group">
          <button onClick={this.handleDecrement}>Subtract</button>
          <button onClick={this.handleIncrement}>Add</button>
        </div>
      </div>
    );
  }
}

export default Counter;
