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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8203 3.11101C13.5895 4.26216 14 5.61553 14 7C13.9976 8.85579 13.2594 10.6349 11.9471 11.9471C10.6349 13.2594 8.85579 13.9976 7 14C5.61553 14 4.26216 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303303 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303303 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101ZM6.17678 11.0732C6.22366 11.1201 6.25 11.1837 6.25 11.25L6.253 11.608C6.253 11.8069 6.33202 11.9977 6.47267 12.1383C6.61333 12.279 6.80409 12.358 7.003 12.358C7.20192 12.358 7.39268 12.279 7.53333 12.1383C7.67399 11.9977 7.753 11.8069 7.753 11.608V11.208C7.75267 11.1491 7.77331 11.092 7.81124 11.0469C7.84917 11.0018 7.9019 10.9717 7.96 10.962C8.43015 10.8785 8.86035 10.6442 9.18565 10.2947C9.51096 9.94514 9.7137 9.49923 9.76327 9.02431C9.81284 8.54938 9.70655 8.07122 9.46044 7.66203C9.21433 7.25283 8.84176 6.93482 8.399 6.756L6.164 5.856C6.0087 5.79833 5.87888 5.68744 5.79764 5.54306C5.71639 5.39868 5.68899 5.23017 5.72031 5.06748C5.75162 4.9048 5.83962 4.7585 5.96865 4.65459C6.09768 4.55068 6.25939 4.49591 6.425 4.5H8.625C8.82392 4.5 9.01468 4.42099 9.15533 4.28033C9.29599 4.13968 9.375 3.94892 9.375 3.75C9.375 3.55109 9.29599 3.36033 9.15533 3.21967C9.01468 3.07902 8.82392 3 8.625 3H8C7.9337 3 7.87011 2.97366 7.82323 2.92678C7.77634 2.8799 7.75 2.81631 7.75 2.75V2.4C7.75 2.20109 7.67099 2.01033 7.53033 1.86967C7.38968 1.72902 7.19892 1.65 7 1.65C6.80109 1.65 6.61033 1.72902 6.46967 1.86967C6.32902 2.01033 6.25 2.20109 6.25 2.4V2.8C6.24947 2.85898 6.22794 2.91584 6.18927 2.96038C6.1506 3.00491 6.09732 3.03421 6.039 3.043C5.56886 3.12653 5.13866 3.36076 4.81335 3.71031C4.48805 4.05987 4.2853 4.50577 4.23573 4.9807C4.18616 5.45562 4.29246 5.93378 4.53857 6.34298C4.78468 6.75218 5.15724 7.07019 5.6 7.249L7.836 8.144C7.99131 8.20168 8.12113 8.31256 8.20237 8.45694C8.28361 8.60132 8.31101 8.76984 8.2797 8.93252C8.24839 9.09521 8.16039 9.24151 8.03136 9.34542C7.90232 9.44932 7.74062 9.5041 7.575 9.5H5.375C5.17609 9.5 4.98533 9.57902 4.84467 9.71967C4.70402 9.86033 4.625 10.0511 4.625 10.25C4.625 10.4489 4.70402 10.6397 4.84467 10.7803C4.98533 10.921 5.17609 11 5.375 11H6C6.06631 11 6.1299 11.0263 6.17678 11.0732ZM23.8538 10.6464C23.9475 10.7402 24.0002 10.8674 24.0002 11V16C24.0018 16.1004 23.9732 16.1989 23.9181 16.2828C23.8629 16.3666 23.7838 16.432 23.6911 16.4703C23.5983 16.5086 23.4961 16.518 23.3979 16.4975C23.2996 16.4769 23.2099 16.4273 23.1402 16.355L21.6792 14.893C21.6334 14.8474 21.5718 14.8212 21.5071 14.8199C21.4425 14.8186 21.3798 14.8422 21.3322 14.886L16.2852 19.539C15.9058 19.8863 15.4152 20.0871 14.9011 20.1054C14.3871 20.1238 13.8834 19.9584 13.4802 19.639L10.5802 17.315C10.5339 17.2782 10.4762 17.259 10.4171 17.2606C10.358 17.2623 10.3014 17.2847 10.2572 17.324L3.10222 23.684C2.97944 23.793 2.83638 23.8767 2.68123 23.9305C2.52608 23.9842 2.36187 24.0068 2.19798 23.997C1.86697 23.9774 1.55735 23.827 1.33722 23.579C1.22823 23.4562 1.14448 23.3132 1.09077 23.158C1.03706 23.0029 1.01443 22.8386 1.02418 22.6748C1.03393 22.5109 1.07587 22.3505 1.14759 22.2028C1.21932 22.0551 1.31944 21.923 1.44222 21.814L8.75622 15.314L8.97522 15.12C9.35488 14.7839 9.84092 14.5925 10.3478 14.5796C10.8547 14.5666 11.3499 14.7328 11.7462 15.049L14.6462 17.366C14.6928 17.4033 14.7513 17.4226 14.811 17.4204C14.8706 17.4182 14.9275 17.3946 14.9712 17.354L19.5542 13.129C19.5789 13.1061 19.5987 13.0784 19.6125 13.0476C19.6262 13.0169 19.6337 12.9837 19.6343 12.95C19.635 12.9163 19.6288 12.8828 19.6163 12.8516C19.6037 12.8203 19.585 12.7919 19.5612 12.768L18.1462 11.354C18.0761 11.2841 18.0284 11.1949 18.009 11.0978C17.9896 11.0007 17.9995 10.9 18.0374 10.8085C18.0754 10.7171 18.1396 10.6389 18.222 10.584C18.3044 10.5291 18.4012 10.4998 18.5002 10.5H23.5002C23.6328 10.5 23.76 10.5527 23.8538 10.6464Z"
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
