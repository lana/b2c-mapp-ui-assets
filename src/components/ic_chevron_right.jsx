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
            d="M18 11.9787C18.0003 11.7334 17.9483 11.4909 17.8474 11.2673C17.7465 11.0437 17.5991 10.8441 17.415 10.682L9.05137 3.32408C8.77422 3.09152 8.41708 2.97663 8.05632 3.00396C7.69556 3.0313 7.35981 3.1987 7.12087 3.47036C6.88193 3.74203 6.75875 4.09639 6.77769 4.45769C6.79663 4.81899 6.95617 5.15854 7.2222 5.40374L14.5359 11.8377C14.556 11.8553 14.5721 11.877 14.5831 11.9013C14.5941 11.9256 14.5998 11.952 14.5998 11.9787C14.5998 12.0054 14.5941 12.0318 14.5831 12.0561C14.5721 12.0804 14.556 12.1021 14.5359 12.1197L7.2222 18.5537C7.08077 18.6724 6.9645 18.8181 6.88021 18.9824C6.79591 19.1466 6.7453 19.3261 6.73135 19.5101C6.71741 19.6942 6.7404 19.8793 6.79898 20.0543C6.85756 20.2294 6.95055 20.391 7.07248 20.5296C7.1944 20.6683 7.34281 20.7811 7.50898 20.8616C7.67515 20.942 7.85572 20.9884 8.04009 20.9981C8.22445 21.0078 8.40889 20.9805 8.58256 20.9178C8.75623 20.8552 8.91562 20.7585 9.05137 20.6334L17.412 13.2777C17.5966 13.1153 17.7445 12.9154 17.8458 12.6915C17.9472 12.4675 17.9998 12.2246 18 11.9787Z"
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
