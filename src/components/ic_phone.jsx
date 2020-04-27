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
            d="M17 0H7C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3V20.932C4 21.7276 4.31607 22.4907 4.87868 23.0533C5.44129 23.6159 6.20435 23.932 7 23.932H17C17.7956 23.932 18.5587 23.6159 19.1213 23.0533C19.6839 22.4907 20 21.7276 20 20.932V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM12 22.432C11.8022 22.432 11.6089 22.3734 11.4444 22.2635C11.28 22.1536 11.1518 21.9974 11.0761 21.8147C11.0004 21.632 10.9806 21.4309 11.0192 21.2369C11.0578 21.0429 11.153 20.8647 11.2929 20.7249C11.4327 20.585 11.6109 20.4898 11.8049 20.4512C11.9989 20.4126 12.2 20.4324 12.3827 20.5081C12.5654 20.5838 12.7216 20.712 12.8315 20.8764C12.9414 21.0409 13 21.2342 13 21.432C13 21.6972 12.8946 21.9516 12.7071 22.1391C12.5196 22.3266 12.2652 22.432 12 22.432ZM18 17.932C18 18.1972 17.8946 18.4516 17.7071 18.6391C17.5196 18.8266 17.2652 18.932 17 18.932H7C6.73478 18.932 6.48043 18.8266 6.29289 18.6391C6.10536 18.4516 6 18.1972 6 17.932V3.5C6 3.23478 6.10536 2.98043 6.29289 2.79289C6.48043 2.60536 6.73478 2.5 7 2.5H17C17.2652 2.5 17.5196 2.60536 17.7071 2.79289C17.8946 2.98043 18 3.23478 18 3.5V17.932Z"
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
