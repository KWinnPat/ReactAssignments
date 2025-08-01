import React from "react";

class ShowHideToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render() {
    return (
      <div className="widget toggle-widget">
        <h2>Show/Hide Toggle</h2>
        {this.state.isVisible && <p>Hide Me</p>}
        <button onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

export default ShowHideToggle;
