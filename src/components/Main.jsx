import React, { Component } from 'react';

import FamilyTree from './FamilyTree';
import FamilyMemberInput from './FamilyMemberInput';

class Main extends Component {
  render() {

    return (
      <div>
        <FamilyTree />
        <FamilyMemberInput />
      </div>
    )
  }
}

export default Main;
