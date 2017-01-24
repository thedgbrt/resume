import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
    if (from === "/" && to === "/projects/lachronique/") {
      this.modal = true;
    } else {
      this.modal = false;
    }
  }

  render () {
    return (
      <div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="fade"
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.modal ? (
            <div className="modal page page-project">
              {this.props.children}
            </div>
          ) : null}
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          component="div"
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.modal ? null : (
            <div className="page page-home">
              {this.props.children}
            </div>
          )}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
};
