import React, { Component } from 'react';

import Styles from './css/family-member-input.css'

class FamilyMemberInput extends Component {

  addFamilyMember(event) {
    event.preventDefault();
  }

  render() {

    return (
      <div id={Styles.familyinput}>
        <h3>add family member</h3>
        <form>
          <select onChange={this.props.changeRelation}>
            <option defaultValue="" disabled>Choose relationship</option>
            <option value="great grandparent">great grandparent</option>
            <option value="grandparent">grandparent</option>
            <option value="parent">parent</option>
            <option value="sibling">sibling</option>
            <option value="child">child</option>
            <option value="grandchild">grandchild</option>
          </select>
          <div>first name:
            <input type="text" onChange={this.props.changeFirstName}/>
          </div>
          <button onClick={this.props.addFamilyMember}>Add to tree</button>
        </form>
      </div>
    )
  }
}

export default FamilyMemberInput;
