// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'

type Props = {
  className: string,
  children?: any,
  setScrollPosition: (y: number) => void,
  to: string
}

export default class CustomLink extends Component {
  props: Props;

  onClick = () => {
    this.props.setScrollPosition(window.scrollY);
  };

  render () {
    return (
      <Link
        className={this.props.className}
        to={this.props.to}
        onClick={() => this.onClick()}
      >
        {this.props.children}
      </Link>
    );
  }
}
