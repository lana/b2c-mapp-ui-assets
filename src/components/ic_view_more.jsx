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
						d="M4 15C5.65685 15 7 13.6569 7 12C7 10.3431 5.65685 9 4 9C2.34315 9 1 10.3431 1 12C1 13.6569 2.34315 15 4 15ZM12.0771 15C13.734 15 15.0771 13.6569 15.0771 12C15.0771 10.3431 13.734 9 12.0771 9C10.4203 9 9.07715 10.3431 9.07715 12C9.07715 13.6569 10.4203 15 12.0771 15ZM23.1543 12C23.1543 13.6569 21.8112 15 20.1543 15C18.4974 15 17.1543 13.6569 17.1543 12C17.1543 10.3431 18.4974 9 20.1543 9C21.8112 9 23.1543 10.3431 23.1543 12Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
