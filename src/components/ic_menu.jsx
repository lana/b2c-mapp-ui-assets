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
						d="M22.5 2.5H1.5C0.947715 2.5 0.5 2.94772 0.5 3.5V4.5C0.5 5.05228 0.947715 5.5 1.5 5.5H22.5C23.0523 5.5 23.5 5.05228 23.5 4.5V3.5C23.5 2.94772 23.0523 2.5 22.5 2.5ZM22.5 10.5H1.5C0.947715 10.5 0.5 10.9477 0.5 11.5V12.5C0.5 13.0523 0.947715 13.5 1.5 13.5H22.5C23.0523 13.5 23.5 13.0523 23.5 12.5V11.5C23.5 10.9477 23.0523 10.5 22.5 10.5ZM1.5 18.5H22.5C23.0523 18.5 23.5 18.9477 23.5 19.5V20.5C23.5 21.0523 23.0523 21.5 22.5 21.5H1.5C0.947715 21.5 0.5 21.0523 0.5 20.5V19.5C0.5 18.9477 0.947715 18.5 1.5 18.5Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
