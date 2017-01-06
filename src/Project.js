import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Project extends Component {
  render() {
    return (
      <div>
        <h2>Hello</h2>
        <p><button onClick={() => browserHistory.goBack()}>Close</button></p>
      </div>
    )
  }
}

export default Project;
