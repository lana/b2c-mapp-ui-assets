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
            d="M12.0197 23.9999C17.9097 24.023 22.9635 19.8276 23.9932 14.0586C24.0385 13.786 23.8522 13.5274 23.5781 13.4833C23.5489 13.4783 23.5187 13.4763 23.4894 13.4763L15.1068 13.4763C14.8287 13.4763 14.603 13.7008 14.603 13.9775L14.603 17.5855C14.603 18.1388 14.1527 18.5878 13.5955 18.5878C13.3668 18.5878 13.1441 18.5106 12.9658 18.3683L5.91309 12.7557C5.47884 12.4099 5.40831 11.7795 5.75591 11.3466C5.80226 11.2884 5.85566 11.2363 5.91309 11.1902L12.9658 5.57764C13.1441 5.43532 13.3668 5.35815 13.5955 5.35815C14.1496 5.36316 14.598 5.80916 14.603 6.36039L14.603 9.96847C14.603 10.2451 14.8287 10.4696 15.1068 10.4696L23.4834 10.4696C23.7645 10.4696 23.9932 10.2421 23.9932 9.96246C23.9932 9.9364 23.9912 9.91135 23.9872 9.88529C22.7973 3.34965 16.5052 -0.989072 9.93515 0.194579C4.01994 1.26097 -0.208662 6.48667 0.00795656 12.4631C0.327342 18.8574 5.58362 23.9067 12.0197 23.9999Z"
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
