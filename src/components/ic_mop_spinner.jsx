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
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              fill="#333333"
              d="M20 38a6.896 6.896 0 0 1-6.004-3.505 6.894 6.894 0 0 1-8.49-8.491 6.893 6.893 0 0 1 0-12.008 6.891 6.891 0 0 1 8.49-8.49 6.895 6.895 0 0 1 12.008 0 6.891 6.891 0 0 1 8.49 8.49 6.895 6.895 0 0 1 0 12.008 6.895 6.895 0 0 1-8.49 8.49A6.895 6.895 0 0 1 20 38"
            />
            <path
              fill="#FFFFFF"
              d="M15.148 29.693a2.02 2.02 0 0 1 2.005 1.781 2.867 2.867 0 0 0 5.694 0 2.02 2.02 0 0 1 3.255-1.347 2.866 2.866 0 0 0 4.025-4.026 2.018 2.018 0 0 1 1.348-3.255A2.865 2.865 0 0 0 34 20a2.865 2.865 0 0 0-2.525-2.846 2.019 2.019 0 0 1-1.348-3.255A2.866 2.866 0 0 0 29.9 10.1a2.865 2.865 0 0 0-3.798-.228 2.02 2.02 0 0 1-3.255-1.348 2.867 2.867 0 1 0-5.694 0 2.02 2.02 0 0 1-3.255 1.348 2.863 2.863 0 0 0-3.798.228 2.864 2.864 0 0 0-.227 3.798 2.02 2.02 0 0 1-1.348 3.255A2.865 2.865 0 0 0 6 20a2.865 2.865 0 0 0 2.525 2.846 2.019 2.019 0 0 1 1.348 3.255A2.865 2.865 0 0 0 10.1 29.9a2.865 2.865 0 0 0 3.798.227 2.017 2.017 0 0 1 1.25-.434"
            />
          </g>
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
