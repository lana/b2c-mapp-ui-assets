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
            d="M12 1.95918C6.45461 1.95918 1.95918 6.45461 1.95918 12C1.95918 17.5454 6.45461 22.0408 12 22.0408C17.5454 22.0408 22.0408 17.5454 22.0408 12C22.0408 6.45461 17.5454 1.95918 12 1.95918ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM17.0998 6.89912C17.4824 7.28166 17.4824 7.9019 17.0999 8.28447L13.3849 11.9999L17.1008 15.7154C17.4834 16.098 17.4834 16.7182 17.1009 17.1008C16.7184 17.4834 16.0981 17.4834 15.7155 17.1009L11.9996 13.3853L8.28455 17.1008C7.90202 17.4834 7.28177 17.4834 6.8992 17.1009C6.51662 16.7183 6.51659 16.0981 6.89912 15.7155L10.6142 12.0001L6.89824 8.28455C6.51567 7.90202 6.51563 7.28177 6.89817 6.8992C7.2807 6.51662 7.90094 6.51659 8.28352 6.89912L11.9994 10.6146L15.7145 6.8992C16.097 6.51662 16.7172 6.51659 17.0998 6.89912Z"
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
