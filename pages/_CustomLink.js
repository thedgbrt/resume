import React, { Component } from 'react'
import { Link } from 'react-router'

export default class CustomLink extends Component {
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
