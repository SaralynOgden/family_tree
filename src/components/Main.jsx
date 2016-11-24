import React, { Component } from 'react';

import FamilyTree from './FamilyTree';
import FamilyMemberInput from './FamilyMemberInput';

import d3 from 'd3';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      relation: 'here',
      firstName: '',
      familyStructure: [{"relation": "grandparents",
                         "children": [{"relation": "parents",
                                       "children": [{"relation": "siblings",
                                                     "children": [{"relation": "children",
                                                                   "children": [{"relation":"grandchildren"}]
                                                                  }]
                                                    }]
                                      }]
                        }],
      tree: d3.layout.tree().size([500, 500])
    }
    this.changeRelation = this.changeRelation.bind(this);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.addFamilyMember = this.addFamilyMember.bind(this);
  }

  changeRelation(event) {
    this.setState({ relation: event.target.value });
  }

  changeFirstName(event) {
    console.log(event);
    this.setState({ firstName: event.target.value });
  }

  addFamilyMember(event) {
    event.preventDefault();
    console.log(this.state.relation);
    console.log(this.state.firstName);
    const tempArr = this.state.familyStructure.slice();
    console.log(tempArr);
    switch (this.state.relation) {
      case 'great grandparent':
        break;
      case 'grandparent':
        break;
      case 'parent':
        break;
      case 'child':
        break;
      case 'sibling':
        break;
      case 'grandchild':
        break;
    }
  }

  render() {
    return (
      <div>
        <FamilyTree relation={this.state.relation}
                    firstName={this.state.firstName}
                    familyStructure={this.state.familyStructure}
                    tree={this.state.tree}/>
        <FamilyMemberInput changeRelation={this.changeRelation}
                           changeFirstName={this.changeFirstName}
                           addFamilyMember={this.addFamilyMember}/>
      </div>
    )
  }
}

export default Main;
