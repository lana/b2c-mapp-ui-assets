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
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.4436 10.27C20.4015 10.1886 20.3378 10.1204 20.2595 10.0728C20.1812 10.0251 20.0913 9.99997 19.9996 9.99997H12.6236L14.4876 1.60597C14.513 1.49332 14.4986 1.37536 14.4469 1.27212C14.3952 1.16888 14.3093 1.08673 14.2039 1.03961C14.0985 0.992493 13.98 0.983319 13.8686 1.01364C13.7571 1.04397 13.6596 1.11193 13.5926 1.20597L3.59264 15.206C3.53829 15.2807 3.50572 15.3691 3.49857 15.4613C3.49142 15.5535 3.50995 15.6458 3.55212 15.7281C3.59429 15.8103 3.65844 15.8793 3.73744 15.9273C3.81644 15.9753 3.9072 16.0005 3.99964 16H11.3756L9.51164 24.39C9.48627 24.5026 9.50067 24.6206 9.55239 24.7238C9.60412 24.8271 9.68998 24.9092 9.79541 24.9563C9.90083 25.0035 10.0193 25.0126 10.1307 24.9823C10.2422 24.952 10.3396 24.884 10.4066 24.79L20.4066 10.79C20.46 10.7151 20.4917 10.6269 20.4983 10.5352C20.5048 10.4434 20.4859 10.3517 20.4436 10.27Z"
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
