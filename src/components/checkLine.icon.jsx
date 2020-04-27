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
            d="M18.4848 6.166C18.9092 6.50148 18.9814 7.11751 18.6459 7.54196L10.9678 17.2563C10.7753 17.5068 10.5264 17.7084 10.2413 17.8446C9.95288 17.9823 9.63572 18.0492 9.31622 18.0397C8.99672 18.0301 8.68412 17.9444 8.40442 17.7897C8.12872 17.6371 7.89286 17.4219 7.71586 17.1613L5.32148 13.7633C5.00986 13.321 5.11576 12.7099 5.55801 12.3982C6.00026 12.0866 6.61139 12.1925 6.92302 12.6348L9.32302 16.0408L9.33627 16.0601C9.34052 16.0665 9.34623 16.0717 9.35292 16.0754C9.35961 16.0791 9.36708 16.0812 9.37473 16.0814C9.38237 16.0816 9.38995 16.08 9.39685 16.0767C9.40375 16.0734 9.40976 16.0685 9.41438 16.0624L9.42589 16.0476L17.1088 6.3271C17.4443 5.90265 18.0603 5.83053 18.4848 6.166Z"
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
