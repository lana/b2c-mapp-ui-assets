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
            d="M16 3C16 2.44772 16.4477 2 17 2H19C19.5523 2 20 2.44772 20 3V21C20 21.5523 19.5523 22 19 22H17C16.4477 22 16 21.5523 16 21V3ZM10 9C10 8.44772 10.4477 8 11 8H13C13.5523 8 14 8.44772 14 9V21C14 21.5523 13.5523 22 13 22H11C10.4477 22 10 21.5523 10 21V9ZM5 14C4.44772 14 4 14.4477 4 15V21C4 21.5523 4.44772 22 5 22H7C7.55228 22 8 21.5523 8 21V15C8 14.4477 7.55228 14 7 14H5Z"
            fill="#121E31"
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
