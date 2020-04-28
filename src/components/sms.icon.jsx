// TODO NO-CLASS: Refactor this file to stop using `class`

import { Component } from 'preact';
import PropTypes from 'prop-types';

import CSS from '../styles/styles.css';

class Icon extends Component { // eslint-disable-line fp/no-class, react/prefer-stateless-function
  render() {
    const color = (this.props.color) ? CSS[this.props.color] : CSS.active;
    return (
      <i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="#303334"
            fill-rule="nonzero"
            d="M20 3H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H5.17L4 18.17V5h16v12zM7 10v2h2v-2H7zm8 0v2h2v-2h-2zm-4 0v2h2v-2h-2z"
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
