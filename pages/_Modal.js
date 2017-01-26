import React, { Component } from 'react'

export default class Modal extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: true,
      rendered: false
    }
  }

  componentWillEnter(callback) {
    setTimeout(callback, 500);
  }

  componentDidEnter() {
    console.log('did enter');
    this.setState({rendered: true});
    setTimeout(() => {
      this.setState({hidden: false});
    }, 100);
  }

  componentWillLeave(callback) {
    this.setState({hidden: true});
    setTimeout(callback, 400);
  }

  render () {
    console.log(this.state.rendered, this.state.hidden);
    if(this.state.rendered) {
      return (
        <div className={this.state.hidden ? "modal hidden" : "modal"}>
          {this.props.children}
        </div>
      );
    }
    return null;
  }
}
