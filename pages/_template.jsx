// @flow
import React, { Component } from 'react'
import ReactTransitionGroup from 'react-addons-transition-group'
import Modal from './_Modal'
// $FlowFixMe
import './styles.scss'

type Props = {
  children: any,
  location: {
    pathname: string
  }
}

export default class Template extends Component {
  state: {
    modal: boolean
  };

  props: Props;

  constructor (props: Props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  componentWillReceiveProps(nextProps: Props) {
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
