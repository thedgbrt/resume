import React from 'react'
import { Link } from 'react-router'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  },
})
