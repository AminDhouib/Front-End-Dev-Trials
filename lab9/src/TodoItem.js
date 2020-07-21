import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dashed",
    };
  };

  componentDidMount = (props) => {
    console.log(this.props.todo);
  };

  render() {
    const { id, title, comment } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p style={divStyle}>
          {title}{": "}
          {comment}

        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "left",
};

const divStyle = {
  marginLeft: "40px",
};

export default TodoItem;
