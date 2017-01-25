import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import './styles.scss'

export default class Template extends Component {
  constructor (props) {
    super(props);
    this.modal = false;
    this.previousChildren = null;
  }

  componentWillReceiveProps(nextProps) {
    const from = this.props.location.pathname;
    const to = nextProps.location.pathname;
    this.previousChildren = this.props.children;

    if (from === "/" && to.startsWith("/projects/")) {
      this.modal = true;
    } else {
      this.modal = false;
    }
  }

  render () {
    return (
      <div>
        {/* {this.modal ? (
          <div className="modal page page-project">
            {this.props.children}
          </div>
        ) : null} */}

        <ReactTransitionGroup component="div">
          {this.modal ? null : this.props.children}
        </ReactTransitionGroup>
      </div>
    )
  }
};
