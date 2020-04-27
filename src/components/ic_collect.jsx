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
            d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C23.993 5.376 18.624 0.007 12 0ZM18.639 12.854L12.352 19.14C12.157 19.335 11.84 19.335 11.645 19.14L5.359 12.854C5.163 12.659 5.163 12.342 5.358 12.147C5.452 12.053 5.58 12 5.713 12H9.5C9.638 12 9.75 11.888 9.75 11.75V5.5C9.75 5.224 9.974 5 10.25 5H13.742C14.018 5 14.242 5.224 14.242 5.5V11.75C14.242 11.888 14.354 12 14.492 12H18.281C18.557 11.997 18.783 12.219 18.786 12.495C18.787 12.63 18.734 12.759 18.639 12.854Z"
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
