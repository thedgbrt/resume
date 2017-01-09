import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Euratalent, LaChronique, ReactWebsites, ResponsiveWebsites } from './data/projects';

class Project extends Component {
  showContent = () => {
    switch (this.props.params.projectName) {
      case "euratalent":
        return <Euratalent/>;
        break;
      case "lachronique":
        return <LaChronique/>;
        break;
      case "responsive-websites":
        return <ResponsiveWebsites/>;
        break;
      case "react-websites":
        return <ReactWebsites/>;
        break;
      default:
        null;
        break;
    }
  }

  render() {
    return (
      <div>
        {this.showContent()}
        <p>
          <button onClick={() => browserHistory.goBack()}>
            Back
          </button>
        </p>
      </div>
    )
  }
}

export default Project;
