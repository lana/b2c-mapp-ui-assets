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
						d="M12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12C23.993 18.624 18.624 23.993 12 24ZM18.639 11.146L12.352 4.86C12.157 4.665 11.84 4.665 11.645 4.86L5.359 11.146C5.163 11.341 5.163 11.658 5.358 11.853C5.452 11.947 5.58 12 5.713 12H9.5C9.638 12 9.75 12.112 9.75 12.25V18.5C9.75 18.776 9.974 19 10.25 19H13.742C14.018 19 14.242 18.776 14.242 18.5V12.25C14.242 12.112 14.354 12 14.492 12H18.281C18.557 12.003 18.783 11.781 18.786 11.505C18.787 11.37 18.734 11.241 18.639 11.146Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon