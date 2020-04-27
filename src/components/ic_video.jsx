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
            d="M21.414 4.914L17.086 0.586C16.711 0.210901 16.2024 0.000113275 15.672 0L4 0C3.46957 0 2.96086 0.210714 2.58579 0.585786C2.21071 0.960859 2 1.46957 2 2V22C2 22.5304 2.21071 23.0391 2.58579 23.4142C2.96086 23.7893 3.46957 24 4 24H20C20.5304 24 21.0391 23.7893 21.4142 23.4142C21.7893 23.0391 22 22.5304 22 22V6.328C21.9999 5.79761 21.7891 5.28899 21.414 4.914ZM16.991 14.319L9.591 18.364C9.42893 18.4514 9.24808 18.4981 9.06398 18.5002C8.87988 18.5023 8.69801 18.4597 8.534 18.376C8.37693 18.3003 8.24389 18.1826 8.14963 18.0359C8.05538 17.8892 8.00359 17.7193 8 17.545V9.455C8.0034 9.28089 8.05489 9.11112 8.14879 8.96446C8.24268 8.8178 8.3753 8.69997 8.532 8.624C8.69601 8.54035 8.87787 8.49774 9.06198 8.49983C9.24608 8.50192 9.42693 8.54864 9.589 8.636L16.989 12.681C17.1419 12.7563 17.2707 12.873 17.3607 13.0177C17.4508 13.1625 17.4985 13.3295 17.4985 13.5C17.4985 13.6705 17.4508 13.8375 17.3607 13.9823C17.2707 14.127 17.1419 14.2437 16.989 14.319H16.991Z"
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
