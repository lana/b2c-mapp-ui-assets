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
            d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C23.993 5.376 18.624 0.007 12 0ZM17.2 17.221C16.823 17.62 16.197 17.647 15.787 17.283L10.828 12.737C10.62 12.548 10.501 12.281 10.5 12V6.5C10.5 5.948 10.948 5.5 11.5 5.5C12.052 5.5 12.5 5.948 12.5 6.5V11.56L17.134 15.808C17.543 16.18 17.573 16.812 17.201 17.221C17.201 17.221 17.2 17.222 17.2 17.221Z"
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
