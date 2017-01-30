// @flow
import React, { Component } from 'react'
import { browserHistory } from 'react-router'

type Props = {
  children: any
}

export default class Modal extends Component {
  state: {
    animating: boolean,
    showBg: boolean,
    showContent: boolean,
    renderContent: boolean
  }

  constructor (props:Props) {
    super(props);
    this.state = {
      animating: false,
      showBg: false,
      showContent: false,
      renderContent: false
    }
  }

  componentWillEnter(callback: () => void) {
    this.setState({animating: true});
    callback();
  }

  componentDidEnter() {
    this.setState({showBg: true});
    setTimeout(() => {
      this.setState({renderContent: true});
    }, 300);
    setTimeout(() => {
      this.setState({animating: false});
      this.setState({showContent: true});
    }, 500);
  }

  componentWillLeave(callback: () => void) {
    this.setState({showBg: false});
    this.setState({animating: true});
    setTimeout(callback, 300);
  }

  render () {
    return (
      <div className={"modal " + (!this.state.showBg ? "hidden " : "") + (this.state.animating ? "animating" : "")}>
        <button className="close" onClick={() => browserHistory.goBack()}>Back</button>
        <div className={"inner " + (!this.state.showContent ? "hidden" : "")}>
          {this.state.renderContent ? this.props.children : null}
        </div>
      </div>
    );
  }
}
