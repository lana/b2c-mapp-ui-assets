import { Component } from 'preact'
import CSS from './styles.css'

class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						fill="#00A0DF"
						d="M3 12a1.125 1.125 0 001.125 1.125h6.563a.188.188 0 01.187.188v6.562a1.125 1.125 0 102.25 0v-6.563a.188.188 0 01.188-.187h6.562a1.125 1.125 0 100-2.25h-6.563a.188.188 0 01-.187-.188V4.125a1.125 1.125 0 10-2.25 0v6.563a.188.188 0 01-.188.187H4.125A1.125 1.125 0 003 12z"
					></path>
				</svg>
			</i>
		)
	}
}

export default Icon
