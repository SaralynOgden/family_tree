import React, { Component } from 'react';

import Node from './Node.jsx';
import Link from './Link.jsx';

import Styles from './css/family-tree.css'

import d3 from 'd3';

class FamilyTree extends Component {
  makeNode(node, key) {
    return <Node x={node.x}
                 y={node.y}
                 relation={node.relation}
                 key={key}/>
  }

  makeLink(link, key) {
    return <Link track={d3.svg.diagonal().projection((d) => [d.x, d.y])(link)}
                 key={key}/>;
  }

  render() {
    const nodes = this.props.tree.nodes(this.props.familyStructure[0]);
    const links = this.props.tree.links(nodes);

    nodes.forEach((d) => {
      d.y = d.depth * 100 + 25; });

    return (
      <svg>
        {links.map((link, key) => this.makeLink(link, key))}
        {nodes.map((node, key) => this.makeNode(node, key))}
      </svg>
    )
  }
}

export default FamilyTree;
