import React from "react";

class ToggledGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHello: true,
    };
  }

  toggleGreeting = () => {
    this.setState((prevState) => ({
      isHello: !prevState.isHello,
    }));
  };

  render() {
    return (
      <div className="widget greeting-widget">
        <h2>Toggled Greeting</h2>
        <p>{this.state.isHello ? "Hello" : "Goodbye"}</p>
        <button onClick={this.toggleGreeting}>Toggle Me</button>
      </div>
    );
  }
}

export default ToggledGreeting;
