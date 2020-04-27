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
            d="M20.4885 3.51072C15.7985 -1.17357 8.198 -1.16957 3.512 3.51872C-1.174 8.20702 -1.17 15.8047 3.52001 20.489C8.20701 25.1703 15.8015 25.1703 20.4885 20.489C25.1705 15.7977 25.1705 8.20202 20.4885 3.51072ZM16.7063 15.2805C17.0756 15.6917 17.0416 16.324 16.6302 16.6932C16.2509 17.0333 15.6764 17.0343 15.2961 16.6962L12.1834 13.5847C12.0853 13.4876 11.9272 13.4876 11.8291 13.5847L8.71745 16.6962C8.32211 17.0774 7.69658 17.0774 7.30124 16.6962C6.9099 16.306 6.9099 15.6727 7.30024 15.2815L7.30124 15.2805L10.4139 12.17C10.511 12.0729 10.512 11.9148 10.4149 11.8178L10.4139 11.8168L7.30124 8.70526C6.92892 8.29606 6.95895 7.66375 7.3683 7.29157C7.74862 6.9454 8.33012 6.9444 8.71244 7.28957L11.8241 10.4011C11.9222 10.4991 12.0803 10.4991 12.1784 10.4011L15.2911 7.28957C15.6824 6.89938 16.3159 6.89938 16.7063 7.29057C17.0966 7.68176 17.0966 8.31507 16.7063 8.70526L13.5936 11.8168C13.4965 11.9148 13.4965 12.0719 13.5936 12.17L16.7063 15.2805Z"
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
