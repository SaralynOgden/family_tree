import React, { Component } from 'react';

import Styles from './css/link.css';

class Node extends Component {
  render() {

    return (
      <path className={Styles.familyPath}
            d={this.props.track}></path>
    )
  }
}

export default Node;
