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
						d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM13.1739 9.65217H15.4007L15.1831 11.7391H13.1739V18H10.5652V11.7391H9V9.65217H10.5652V8.53304C10.5652 7.55165 10.9534 6 13.0023 6H15.2609V8.09217C15.2609 8.09217 13.92 8.08696 13.7019 8.08696C13.6276 8.08323 13.5533 8.09592 13.4844 8.12411C13.4156 8.15231 13.3537 8.19532 13.3033 8.2501C13.2529 8.30487 13.2152 8.37007 13.1928 8.44106C13.1705 8.51205 13.164 8.5871 13.1739 8.66087V9.65217Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
