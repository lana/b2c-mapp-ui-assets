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
            d="M1 5H14C14.552 5 15 5.448 15 6V17C15 17.552 14.552 18 14 18H1C0.448 18 0 17.552 0 17V6C0 5.448 0.448 5 1 5ZM23.263 5.575C23.115 5.484 22.931 5.475 22.776 5.553L16.776 8.553C16.607 8.638 16.5 8.811 16.5 9.001V14.001C16.5 14.19 16.607 14.363 16.776 14.448L22.776 17.448C23.023 17.572 23.323 17.472 23.447 17.225C23.482 17.155 23.5 17.079 23.5 17.001V6.001C23.5 5.827 23.411 5.666 23.263 5.575Z"
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
