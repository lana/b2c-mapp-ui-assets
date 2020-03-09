import { Component } from 'preact'
import CSS from './styles.css'

class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
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
						fillRule="evenodd"
						clipRule="evenodd"
						d="M15.4444 0.926917C16.3488 0.322569 17.4122 0 18.5 0C19.9587 0 21.3576 0.579463 22.3891 1.61091C23.4205 2.64236 24 4.04131 24 5.5C24 6.5878 23.6774 7.65117 23.0731 8.55564C22.4687 9.46011 21.6098 10.1651 20.6048 10.5813C19.5998 10.9976 18.4939 11.1065 17.427 10.8943C16.3601 10.6821 15.3801 10.1583 14.6109 9.38909C13.8417 8.6199 13.3179 7.63989 13.1057 6.573C12.8935 5.5061 13.0024 4.40023 13.4187 3.39524C13.8349 2.39025 14.5399 1.53126 15.4444 0.926917ZM17.0879 8.06915C17.1789 8.10692 17.2765 8.12624 17.375 8.126C17.4741 8.12743 17.5724 8.10906 17.6643 8.07197C17.7562 8.03488 17.8397 7.97981 17.91 7.91L21.66 4.16C21.7925 4.01783 21.8646 3.82978 21.8612 3.63548C21.8577 3.44118 21.779 3.25579 21.6416 3.11838C21.5042 2.98097 21.3188 2.90225 21.1245 2.89882C20.9302 2.8954 20.7422 2.96752 20.6 3.1L17.375 6.315L16.405 5.346C16.3363 5.27231 16.2535 5.21321 16.1615 5.17222C16.0695 5.13123 15.9702 5.10919 15.8695 5.10741C15.7688 5.10563 15.6688 5.12416 15.5754 5.16188C15.482 5.1996 15.3972 5.25574 15.326 5.32696C15.2547 5.39818 15.1986 5.48301 15.1609 5.5764C15.1232 5.66979 15.1046 5.76982 15.1064 5.87052C15.1082 5.97123 15.1302 6.07054 15.1712 6.16254C15.2122 6.25454 15.2713 6.33734 15.345 6.406L16.845 7.906C16.9144 7.97593 16.997 8.03139 17.0879 8.06915ZM11.619 6.789C10.9887 6.30108 10.2687 5.94162 9.49998 5.731V4.5C9.49998 4.10218 9.34195 3.72064 9.06064 3.43934C8.77934 3.15804 8.39781 3 7.99998 3C7.60216 3 7.22063 3.15804 6.93932 3.43934C6.65802 3.72064 6.49998 4.10218 6.49998 4.5V5.73C3.57898 6.521 1.49998 9.507 1.49998 13V13.646C1.49768 15.7737 1.0024 17.8719 0.0529833 19.776C0.014785 19.8522 -0.00328506 19.937 0.000490513 20.0221C0.00426609 20.1073 0.0297618 20.1901 0.0745547 20.2627C0.119348 20.3352 0.181949 20.3951 0.256411 20.4367C0.330872 20.4782 0.414719 20.5 0.499983 20.5H15.5C15.5852 20.5 15.6691 20.4782 15.7436 20.4367C15.818 20.3951 15.8806 20.3352 15.9254 20.2627C15.9702 20.1901 15.9957 20.1073 15.9995 20.0221C16.0033 19.937 15.9852 19.8522 15.947 19.776C14.998 17.8717 14.5028 15.7736 14.5 13.646V13C14.5008 12.3556 14.4287 11.7132 14.285 11.085C12.8928 10.0346 11.9422 8.50281 11.619 6.789ZM9.5 21.5H6.5C6.36739 21.5 6.24021 21.5527 6.14645 21.6464C6.05268 21.7402 6 21.8674 6 22C6 22.5304 6.21071 23.0391 6.58579 23.4142C6.96086 23.7893 7.46957 24 8 24C8.53043 24 9.03914 23.7893 9.41421 23.4142C9.78929 23.0391 10 22.5304 10 22C10 21.8674 9.94732 21.7402 9.85355 21.6464C9.75979 21.5527 9.63261 21.5 9.5 21.5Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
