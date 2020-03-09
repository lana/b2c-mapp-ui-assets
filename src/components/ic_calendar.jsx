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
						d="M21.5 3H18.75C18.612 3 18.5 2.888 18.5 2.75V1C18.5 0.448 18.052 0 17.5 0C16.948 0 16.5 0.448 16.5 1V5.75C16.5 6.164 16.164 6.5 15.75 6.5C15.336 6.5 15 6.164 15 5.75V3.5C15 3.224 14.776 3 14.5 3H8.25C8.112 3 8.001 2.889 8 2.751V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V5.75C6 6.164 5.664 6.5 5.25 6.5C4.836 6.5 4.5 6.164 4.5 5.75V3.5C4.5 3.224 4.276 3 4 3H2.5C1.395 3 0.5 3.895 0.5 5V22C0.5 23.105 1.395 24 2.5 24H21.5C22.605 24 23.5 23.105 23.5 22V5C23.5 3.895 22.605 3 21.5 3ZM21 22H3C2.724 22 2.5 21.776 2.5 21.5V9.5C2.5 9.224 2.724 9 3 9H21C21.276 9 21.5 9.224 21.5 9.5V21.5C21.5 21.776 21.276 22 21 22Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon