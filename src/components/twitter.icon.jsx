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
            d="M16.7715 9.55278C16.776 9.65854 16.779 9.76429 16.779 9.87154C16.779 13.1243 14.3025 16.8758 9.774 16.8758C8.3835 16.8758 7.08975 16.4685 6 15.7703C6.19275 15.7928 6.3885 15.804 6.58725 15.804C7.74075 15.804 8.802 15.411 9.645 14.7503C8.56725 14.7308 7.65825 14.019 7.34475 13.041C7.4955 13.0695 7.64925 13.0845 7.80825 13.0845C8.0325 13.0845 8.25 13.0545 8.457 12.9983C7.3305 12.7725 6.48225 11.7773 6.48225 10.5848C6.48225 10.5743 6.48225 10.5638 6.48225 10.5533C6.81375 10.7378 7.194 10.8488 7.5975 10.8615C6.93675 10.4198 6.50175 9.66603 6.50175 8.81254C6.50175 8.36104 6.62325 7.93804 6.8355 7.57429C8.04975 9.06379 9.864 10.044 11.91 10.1468C11.868 9.96678 11.8463 9.77853 11.8463 9.58578C11.8463 8.22604 12.9488 7.12354 14.3078 7.12354C15.0165 7.12354 15.6563 7.42279 16.1047 7.90129C16.6658 7.79104 17.193 7.58629 17.6685 7.30429C17.4848 7.87879 17.094 8.36104 16.5863 8.66629C17.0843 8.60629 17.5583 8.47429 18 8.27853C17.67 8.77203 17.2523 9.20553 16.7715 9.55278ZM12 0C5.37225 0 0 5.37225 0 12C0 18.627 5.37225 24 12 24C18.6278 24 24 18.627 24 12C24 5.37225 18.6278 0 12 0Z"
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
