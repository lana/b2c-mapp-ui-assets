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
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#00A0DF"
            fill-rule="evenodd"
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM5.256 12.619a.875.875 0 01.619-1.494h5.104a.146.146 0 00.146-.146V5.875a.875.875 0 011.75 0v5.104a.146.146 0 00.146.146h5.104a.875.875 0 110 1.75h-5.104a.146.146 0 00-.146.146v5.104a.875.875 0 11-1.75 0v-5.104a.146.146 0 00-.146-.146H5.875a.875.875 0 01-.619-.256z"
            clip-rule="evenodd"
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
