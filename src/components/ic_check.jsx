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
            d="M20.5408 3.21082C20.2982 3.03688 19.9964 2.96644 19.7018 3.01499C19.4073 3.06355 19.1441 3.22711 18.9701 3.46972L8.43775 18.1543L4.92196 14.6355C4.81745 14.5309 4.69337 14.4479 4.5568 14.3913C4.42023 14.3347 4.27385 14.3056 4.12601 14.3055C3.97818 14.3055 3.83178 14.3346 3.69519 14.3911C3.55859 14.4477 3.43447 14.5306 3.32991 14.6351C3.22535 14.7396 3.1424 14.8637 3.08579 15.0002C3.02919 15.1368 3.00003 15.2832 3 15.431C2.99997 15.5789 3.02905 15.7253 3.08559 15.8619C3.14213 15.9984 3.22503 16.1226 3.32954 16.2271L7.78337 20.6802C7.90031 20.7927 8.03983 20.8791 8.19269 20.9336C8.34555 20.9881 8.50824 21.0094 8.66998 20.9962C8.83172 20.983 8.9888 20.9356 9.1308 20.857C9.2728 20.7785 9.39648 20.6706 9.49362 20.5406L20.7997 4.78148C20.9736 4.53886 21.0441 4.23709 20.9955 3.94253C20.947 3.64798 20.7834 3.38478 20.5408 3.21082Z"
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
