import { Component } from 'preact'
import CSS from './styles.css'

class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg
					width="26"
					height="26"
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M0.75 12.999C0.75 6.23354 6.23451 0.749023 13 0.749023C19.7655 0.749023 25.25 6.23354 25.25 12.999C25.25 19.7645 19.7655 25.249 13 25.249C6.23451 25.249 0.75 19.7645 0.75 12.999Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
