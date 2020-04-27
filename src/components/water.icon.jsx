// TODO NO-CLASS: Refactor this file to stop using `class`

import { Component } from 'preact';
import PropTypes from 'prop-types';

import CSS from '../styles/styles.css';

class Icon extends Component { // eslint-disable-line fp/no-class, react/prefer-stateless-function
  render() {
    const color = this.props.color ? CSS[this.props.color] : CSS.active;
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
            d="M12.842 0.446988C12.7461 0.313206 12.6197 0.204202 12.4733 0.129006C12.3268 0.0538101 12.1646 0.0145874 12 0.0145874C11.8354 0.0145874 11.6732 0.0538101 11.5267 0.129006C11.3803 0.204202 11.2539 0.313206 11.158 0.446988C11.086 0.557988 4 11.735 4 15.986C4 18.1077 4.84285 20.1426 6.34315 21.6428C7.84344 23.1431 9.87827 23.986 12 23.986C14.1217 23.986 16.1566 23.1431 17.6569 21.6428C19.1571 20.1426 20 18.1077 20 15.986C20 11.736 12.914 0.557988 12.842 0.446988ZM12 21.236C10.6081 21.2344 9.27366 20.6808 8.28944 19.6965C7.30522 18.7123 6.75159 17.3779 6.75 15.986C6.75 15.7871 6.82902 15.5963 6.96967 15.4557C7.11032 15.315 7.30109 15.236 7.5 15.236C7.69891 15.236 7.88968 15.315 8.03033 15.4557C8.17098 15.5963 8.25 15.7871 8.25 15.986C8.25132 16.9801 8.64684 17.9332 9.34981 18.6362C10.0528 19.3392 11.0058 19.7347 12 19.736C12.1989 19.736 12.3897 19.815 12.5303 19.9557C12.671 20.0963 12.75 20.2871 12.75 20.486C12.75 20.6849 12.671 20.8757 12.5303 21.0163C12.3897 21.157 12.1989 21.236 12 21.236Z"
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
