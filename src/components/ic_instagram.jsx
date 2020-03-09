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
						d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM6 9.13043C6 7.40154 7.40154 6 9.13043 6H14.8696C16.5985 6 18 7.40154 18 9.13043V14.8696C18 16.5985 16.5985 18 14.8696 18H9.13043C7.40154 18 6 16.5985 6 14.8696V9.13043ZM15.1304 12C15.1304 13.7289 13.7289 15.1304 12 15.1304C10.2711 15.1304 8.86957 13.7289 8.86957 12C8.86957 10.2711 10.2711 8.86957 12 8.86957C13.7289 8.86957 15.1304 10.2711 15.1304 12ZM15.6522 9.13043C16.0844 9.13043 16.4348 8.78005 16.4348 8.34783C16.4348 7.9156 16.0844 7.56522 15.6522 7.56522C15.22 7.56522 14.8696 7.9156 14.8696 8.34783C14.8696 8.78005 15.22 9.13043 15.6522 9.13043Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
