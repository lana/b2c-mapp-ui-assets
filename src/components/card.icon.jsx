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
            d="M0 18.6087C0 19.7617 0.933913 20.6957 2.08696 20.6957H21.913C23.0661 20.6957 24 19.7617 24 18.6087V9.73913C24 9.59513 23.8831 9.47826 23.7391 9.47826H0.26087C0.11687 9.47826 0 9.59513 0 9.73913V18.6087ZM17.2174 16.2609H20.3478C20.7798 16.2609 21.1304 16.6115 21.1304 17.0435C21.1304 17.4755 20.7798 17.8261 20.3478 17.8261H17.2174C16.7854 17.8261 16.4348 17.4755 16.4348 17.0435C16.4348 16.6115 16.7854 16.2609 17.2174 16.2609ZM4.17391 12.087H12.5217C12.9537 12.087 13.3043 12.4376 13.3043 12.8696C13.3043 13.3016 12.9537 13.6522 12.5217 13.6522H4.17391C3.74191 13.6522 3.3913 13.3016 3.3913 12.8696C3.3913 12.4376 3.74191 12.087 4.17391 12.087ZM4.17391 16.2609H7.30435C7.73635 16.2609 8.08696 16.6115 8.08696 17.0435C8.08696 17.4755 7.73635 17.8261 7.30435 17.8261H4.17391C3.74191 17.8261 3.3913 17.4755 3.3913 17.0435C3.3913 16.6115 3.74191 16.2609 4.17391 16.2609ZM24 6.08696C24 4.93391 23.0661 4 21.913 4H2.08696C0.933913 4 0 4.93391 0 6.08696V7.65217C0 7.79617 0.11687 7.91304 0.26087 7.91304H23.7391C23.8831 7.91304 24 7.79617 24 7.65217V6.08696Z"
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
