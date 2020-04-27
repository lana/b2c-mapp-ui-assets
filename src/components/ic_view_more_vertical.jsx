// TODO NO-CLASS: Refactor this file to stop using `class`

import { Component } from 'preact';
import PropTypes from 'prop-types';

import CSS from '../styles/styles.css';

class Icon extends Component { // eslint-disable-line fp/no-class, react/prefer-stateless-function
  render() {
    const color = (this.props.color) ? CSS[this.props.color] : CSS.active;
    return (
      <i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.07715 3.92308C9.07715 5.57993 10.4203 6.92308 12.0771 6.92308C13.734 6.92308 15.0771 5.57993 15.0771 3.92308C15.0771 2.26623 13.734 0.923081 12.0771 0.92308C10.4203 0.92308 9.07715 2.26623 9.07715 3.92308ZM9.07715 12C9.07715 13.6569 10.4203 15 12.0771 15C13.734 15 15.0771 13.6569 15.0771 12C15.0771 10.3431 13.734 9 12.0771 9C10.4203 9 9.07715 10.3431 9.07715 12ZM12.0771 23.0769C10.4203 23.0769 9.07715 21.7338 9.07715 20.0769C9.07715 18.4201 10.4203 17.0769 12.0771 17.0769C13.734 17.0769 15.0771 18.4201 15.0771 20.0769C15.0771 21.7338 13.734 23.0769 12.0771 23.0769Z"
            fill="#00A0DF"
          />
        </svg>
      </i>
    );
  }
}

Icon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
