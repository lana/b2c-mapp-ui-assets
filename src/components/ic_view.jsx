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
            d="M11.9999 4.60001C16.3999 4.53801 20.7869 7.61401 23.4319 10.524C23.7948 10.9288 23.9958 11.4533 23.9963 11.9969C23.9969 12.5406 23.797 13.0654 23.4349 13.471C20.8179 16.351 16.4939 19.4 12.1469 19.4H11.8389C7.5069 19.4 3.1819 16.351 0.567901 13.472C0.20533 13.0666 0.00488281 12.5419 0.00488281 11.998C0.00488281 11.4542 0.20533 10.9294 0.567901 10.524C3.2129 7.61501 7.5999 4.53701 11.9999 4.60001ZM8.17514 9.44439C7.66969 10.2009 7.3999 11.0902 7.3999 12C7.3999 13.22 7.88454 14.39 8.74721 15.2527C9.60988 16.1154 10.7799 16.6 11.9999 16.6C12.9097 16.6 13.7991 16.3302 14.5555 15.8248C15.312 15.3193 15.9016 14.6009 16.2497 13.7604C16.5979 12.9198 16.689 11.9949 16.5115 11.1026C16.334 10.2103 15.8959 9.39064 15.2526 8.74732C14.6093 8.104 13.7896 7.66589 12.8973 7.4884C12.005 7.31091 11.0801 7.402 10.2396 7.75017C9.39902 8.09833 8.68059 8.68792 8.17514 9.44439ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
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
