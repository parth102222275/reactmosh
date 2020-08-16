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
        <button className="btn btn-secondary btn-sm">Increament</button>
        <ul>
          {" "}
          {this.state.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
  getbadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  ChangeCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default Counter;
