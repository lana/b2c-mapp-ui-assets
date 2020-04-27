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
            d="M23.1689 17.4904L20.7169 15.0374C20.4558 14.7758 20.1457 14.5683 19.8043 14.4267C19.463 14.2851 19.097 14.2122 18.7274 14.2122C18.3579 14.2122 17.9919 14.2851 17.6505 14.4267C17.3091 14.5683 16.999 14.7758 16.7379 15.0374L16.2379 15.5374C13.7737 13.4726 11.4974 11.1934 9.43593 8.72639L9.93593 8.22639C10.4624 7.69833 10.7581 6.98307 10.7581 6.23739C10.7581 5.4917 10.4624 4.77644 9.93593 4.24839L7.47893 1.79839C6.94254 1.28595 6.22926 1 5.48743 1C4.74561 1 4.03233 1.28595 3.49593 1.79839L2.15593 3.14439C1.51202 3.79294 1.11086 4.64329 1.01981 5.55267C0.928764 6.46204 1.15338 7.37505 1.65593 8.13839C5.65103 14.1582 10.8099 19.3181 16.8289 23.3144C17.5949 23.8123 18.5078 24.0342 19.4168 23.9433C20.3259 23.8524 21.1768 23.4542 21.8289 22.8144L23.1739 21.4684C23.4354 21.2075 23.6429 20.8975 23.7845 20.5563C23.926 20.2151 23.9989 19.8493 23.9989 19.4799C23.9989 19.1105 23.926 18.7447 23.7845 18.4035C23.6429 18.0623 23.4354 17.7523 23.1739 17.4914L23.1689 17.4904Z"
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
