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
            d="M11.9787 17C11.7334 17.0003 11.4909 16.9483 11.2673 16.8474C11.0437 16.7465 10.8441 16.5991 10.682 16.415L3.32408 8.05137C3.09152 7.77422 2.97663 7.41708 3.00396 7.05632C3.0313 6.69556 3.1987 6.35981 3.47036 6.12087C3.74203 5.88193 4.0964 5.75875 4.45769 5.77769C4.81899 5.79663 5.15855 5.95617 5.40374 6.2222L11.8377 13.5359C11.8553 13.556 11.877 13.5721 11.9013 13.5831C11.9256 13.5941 11.952 13.5998 11.9787 13.5998C12.0054 13.5998 12.0318 13.5941 12.0561 13.5831C12.0804 13.5721 12.1021 13.556 12.1197 13.5359L18.5537 6.2222C18.6724 6.08078 18.8181 5.9645 18.9824 5.88021C19.1466 5.79591 19.3261 5.74531 19.5101 5.73136C19.6942 5.71741 19.8793 5.7404 20.0543 5.79898C20.2294 5.85756 20.391 5.95055 20.5296 6.07248C20.6683 6.19441 20.7811 6.34282 20.8616 6.50898C20.942 6.67515 20.9884 6.85573 20.9981 7.04009C21.0078 7.22446 20.9805 7.40889 20.9178 7.58256C20.8552 7.75623 20.7585 7.91562 20.6334 8.05138L13.2777 16.412C13.1153 16.5966 12.9154 16.7445 12.6915 16.8458C12.4675 16.9472 12.2246 16.9998 11.9787 17Z"
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
