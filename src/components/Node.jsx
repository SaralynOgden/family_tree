import React, { Component } from 'react';

import Styles from './css/node.css';

class Node extends Component {
  render() {

    return (
      <g>
        <text textAnchor="middle"
              x={this.props.x}
              y={this.props.y}>
          {this.props.relation}
        </text>
      </g>
    )
  }
}

export default Node;
