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
						d="M6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}
export default Icon
