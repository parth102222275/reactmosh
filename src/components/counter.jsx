import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getbadgeClass()}>
          {" "}
          {this.ChangeCount()}{" "}
        </span>
        <button
          onClick={this.handleincreament}
          className="btn btn-secondary btn-sm m-2"
        >
          increament
        </button>
        <button
          onClick={this.handledecreament}
          className="btn btn-secondary btn-sm m-3"
        >
          {" "}
          decreament{" "}
        </button>
        <button
          onClick={this.handlereset}
          className="btn btn-secondary btn-sm "
        >
          {" "}
          reset
        </button>
        <ul>
          {" "}
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  handledecreament = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handlereset = () => {
    this.setState({ count: (this.state.count = 0) });
  };
  handleincreament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  getbadgeClass() {
    let classes = "badge m-2 badge-";

    if (this.state.count > 0) {
      classes += "primary";
    } else if (this.state.count === 0) {
      classes += "warning";
    } else {
      classes += "danger";
    }
    // classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  ChangeCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default Counter;
