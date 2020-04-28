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
            d="M12.0001 6.61224C12.5411 6.61224 12.9797 7.05082 12.9797 7.59184V16.4082C12.9797 16.9492 12.5411 17.3878 12.0001 17.3878C11.4591 17.3878 11.0205 16.9492 11.0205 16.4082V7.59184C11.0205 7.05082 11.4591 6.61224 12.0001 6.61224Z"
            fill="#00A0DF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.6123 12C6.6123 11.459 7.05088 11.0204 7.5919 11.0204H16.4082C16.9492 11.0204 17.3878 11.459 17.3878 12C17.3878 12.541 16.9492 12.9796 16.4082 12.9796H7.5919C7.05088 12.9796 6.6123 12.541 6.6123 12Z"
            fill="#00A0DF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 1.95918C6.45461 1.95918 1.95918 6.45461 1.95918 12C1.95918 17.5454 6.45461 22.0408 12 22.0408C17.5454 22.0408 22.0408 17.5454 22.0408 12C22.0408 6.45461 17.5454 1.95918 12 1.95918ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
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
