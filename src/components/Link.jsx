import React, { Component } from 'react';

class Node extends Component {
  render() {

    return (
      <path d={this.props.track}></path>
    )
  }
}

export default Node;
