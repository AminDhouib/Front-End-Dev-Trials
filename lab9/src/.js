import React, { Component } from 'react';
import Comment from './Comment';

class Comment extends Component {
  render() {
    return this.props.comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  }
}

export default Todos;