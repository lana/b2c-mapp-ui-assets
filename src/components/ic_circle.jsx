import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
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
						d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM12 1.77778C6.35442 1.77778 1.77778 6.35442 1.77778 12C1.77778 17.6456 6.35442 22.2222 12 22.2222C17.6456 22.2222 22.2222 17.6456 22.2222 12C22.2222 6.35442 17.6456 1.77778 12 1.77778Z"
						fill="#121E31"
					/>
				</svg>
			</i>
		)
	}
}
