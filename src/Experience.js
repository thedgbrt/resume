import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Dgbrt, FirstWebsite, ModelSociety, Russia } from './data/experiences';

class Experience extends Component {
  showContent = () => {
    switch (this.props.params.experienceName) {
      case "first-website":
        return <FirstWebsite/>;
        break;
      case "russia":
        return <Russia/>;
        break;
      case "model-society":
        return <ModelSociety/>;
        break;
      case "dgbrt":
        return <Dgbrt/>;
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

export default Experience;
