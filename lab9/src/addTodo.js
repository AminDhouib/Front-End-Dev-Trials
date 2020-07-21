import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Trans } from "react-i18next";


export class AddTodo extends Component {
  state = {
    title: '',
    comment: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title, this.state.comment);
    this.setState({ comment: '' });
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          type="text" 
          name="title" 
          style={{"width":"300px"}}
          placeholder="Name / Nom" 
          value={this.state.title}
          onChange={this.onChange}
          className="blueText"
          required
        /><br/><br/>
        <input 
          type="text" 
          name="comment" 
          style={{"width":"600px"}}
          placeholder="Review / Commentaire"
          value={this.state.comment}
          onChange={this.onChange}
          className="blueText"
          required
        /><br/><br/>
        <button type="submit" className="btn btn-success" value="Submit"><Trans>Submit Review</Trans></button>
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
