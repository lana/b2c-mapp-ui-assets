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
						d="M21 2.5C21 1.83696 20.7366 1.20107 20.2678 0.732233C19.7989 0.263392 19.163 0 18.5 0L5.5 0C4.83696 0 4.20107 0.263392 3.73223 0.732233C3.26339 1.20107 3 1.83696 3 2.5V21.5C3 21.8283 3.06466 22.1534 3.1903 22.4567C3.31594 22.76 3.50009 23.0356 3.73223 23.2678C3.96438 23.4999 4.23998 23.6841 4.54329 23.8097C4.84661 23.9353 5.1717 24 5.5 24H15.5C16.9582 23.9984 18.3562 23.4184 19.3873 22.3873C20.4184 21.3562 20.9984 19.9582 21 18.5V2.5ZM7 4C7.00181 3.86796 7.05507 3.74183 7.14845 3.64845C7.24183 3.55507 7.36796 3.50181 7.5 3.5H16.5C16.6326 3.5 16.7598 3.55268 16.8536 3.64645C16.9473 3.74021 17 3.86739 17 4V10.5C17 10.6326 16.9473 10.7598 16.8536 10.8536C16.7598 10.9473 16.6326 11 16.5 11H7.5C7.36739 11 7.24021 10.9473 7.14645 10.8536C7.05268 10.7598 7 10.6326 7 10.5V4ZM11.5 16.75C11.5 16.9489 11.421 17.1397 11.2803 17.2803C11.1397 17.421 10.9489 17.5 10.75 17.5H9.5C9.36739 17.5 9.24021 17.5527 9.14645 17.6464C9.05268 17.7402 9 17.8674 9 18V19.25C9 19.4489 8.92098 19.6397 8.78033 19.7803C8.63968 19.921 8.44891 20 8.25 20C8.05109 20 7.86032 19.921 7.71967 19.7803C7.57902 19.6397 7.5 19.4489 7.5 19.25V18C7.5 17.8674 7.44732 17.7402 7.35355 17.6464C7.25979 17.5527 7.13261 17.5 7 17.5H5.75C5.55109 17.5 5.36032 17.421 5.21967 17.2803C5.07902 17.1397 5 16.9489 5 16.75C5 16.5511 5.07902 16.3603 5.21967 16.2197C5.36032 16.079 5.55109 16 5.75 16H7C7.13261 16 7.25979 15.9473 7.35355 15.8536C7.44732 15.7598 7.5 15.6326 7.5 15.5V14.25C7.5 14.0511 7.57902 13.8603 7.71967 13.7197C7.86032 13.579 8.05109 13.5 8.25 13.5C8.44891 13.5 8.63968 13.579 8.78033 13.7197C8.92098 13.8603 9 14.0511 9 14.25V15.5C9 15.6326 9.05268 15.7598 9.14645 15.8536C9.24021 15.9473 9.36739 16 9.5 16H10.75C10.9489 16 11.1397 16.079 11.2803 16.2197C11.421 16.3603 11.5 16.5511 11.5 16.75ZM14.5 19.5C14.3022 19.5 14.1089 19.4414 13.9444 19.3315C13.78 19.2216 13.6518 19.0654 13.5761 18.8827C13.5004 18.7 13.4806 18.4989 13.5192 18.3049C13.5578 18.1109 13.653 17.9327 13.7929 17.7929C13.9327 17.653 14.1109 17.5578 14.3049 17.5192C14.4989 17.4806 14.7 17.5004 14.8827 17.5761C15.0654 17.6518 15.2216 17.78 15.3315 17.9444C15.4414 18.1089 15.5 18.3022 15.5 18.5C15.5 18.7652 15.3946 19.0196 15.2071 19.2071C15.0196 19.3946 14.7652 19.5 14.5 19.5ZM17 16.5C16.8022 16.5 16.6089 16.4414 16.4444 16.3315C16.28 16.2216 16.1518 16.0654 16.0761 15.8827C16.0004 15.7 15.9806 15.4989 16.0192 15.3049C16.0578 15.1109 16.153 14.9327 16.2929 14.7929C16.4327 14.653 16.6109 14.5578 16.8049 14.5192C16.9989 14.4806 17.2 14.5004 17.3827 14.5761C17.5654 14.6518 17.7216 14.78 17.8315 14.9444C17.9414 15.1089 18 15.3022 18 15.5C18 15.7652 17.8946 16.0196 17.7071 16.2071C17.5196 16.3946 17.2652 16.5 17 16.5Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon