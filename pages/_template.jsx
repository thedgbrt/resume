// @flow
import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import Modal from './_Modal';
import './styles.scss'

export default class Template extends Component {
  state: {
    modal: boolean
  };

  constructor (props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname === "/" &&
        nextProps.location.pathname.startsWith("/projects/")) {
      this.setState({modal:true});
    } else {
      this.setState({modal:false});
    }
  }

  render () {
    return (
      <div>
        <ReactTransitionGroup key="1" component="div">
          {this.state.modal ? <Modal>{this.props.children}</Modal> : null}
        </ReactTransitionGroup>

        <ReactTransitionGroup key="2" component="div">
          {this.state.modal ? null : this.props.children}
        </ReactTransitionGroup>
      </div>
    )
  }
};
