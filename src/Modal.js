import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Modal.css';

class Modal extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        component="div"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        transitionName="fade"
      >
        {React.Children.count(this.props.children) > 0 &&
          <div className="overlay">
            <div className="modal container">
              {this.props.children}
            </div>
          </div>
        }
      </ReactCSSTransitionGroup>
    )
  }
}

export default Modal;
