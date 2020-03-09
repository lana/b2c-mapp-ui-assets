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
						d="M20 9.5H19.25V6.75C19.25 4.95979 18.5388 3.2429 17.273 1.97703C16.0071 0.711159 14.2902 0 12.5 0C10.7098 0 8.9929 0.711159 7.72703 1.97703C6.46116 3.2429 5.75 4.95979 5.75 6.75V9.5H5C4.46957 9.5 3.96086 9.71071 3.58579 10.0858C3.21071 10.4609 3 10.9696 3 11.5V22C3 22.5304 3.21071 23.0391 3.58579 23.4142C3.96086 23.7893 4.46957 24 5 24H20C20.5304 24 21.0391 23.7893 21.4142 23.4142C21.7893 23.0391 22 22.5304 22 22V11.5C22 10.9696 21.7893 10.4609 21.4142 10.0858C21.0391 9.71071 20.5304 9.5 20 9.5ZM12.5 18.5C12.1044 18.5 11.7178 18.3827 11.3889 18.1629C11.06 17.9432 10.8036 17.6308 10.6522 17.2654C10.5009 16.8999 10.4613 16.4978 10.5384 16.1098C10.6156 15.7219 10.8061 15.3655 11.0858 15.0858C11.3655 14.8061 11.7219 14.6156 12.1098 14.5384C12.4978 14.4613 12.8999 14.5009 13.2654 14.6522C13.6308 14.8036 13.9432 15.06 14.1629 15.3889C14.3827 15.7178 14.5 16.1044 14.5 16.5C14.5 17.0304 14.2893 17.5391 13.9142 17.9142C13.5391 18.2893 13.0304 18.5 12.5 18.5ZM16.75 9C16.75 9.13261 16.6973 9.25979 16.6036 9.35355C16.5098 9.44732 16.3826 9.5 16.25 9.5H8.75C8.61739 9.5 8.49021 9.44732 8.39645 9.35355C8.30268 9.25979 8.25 9.13261 8.25 9V6.75C8.25 5.62283 8.69777 4.54183 9.4948 3.7448C10.2918 2.94777 11.3728 2.5 12.5 2.5C13.6272 2.5 14.7082 2.94777 15.5052 3.7448C16.3022 4.54183 16.75 5.62283 16.75 6.75V9Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon