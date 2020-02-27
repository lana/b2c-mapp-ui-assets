import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0H40V40H0V0Z" fill="white" />
					<path
						d="M29 25C29 27.7614 24.9706 30 20 30C15.0294 30 11 27.7614 11 25C11 22.2386 15.0294 20 20 20C24.9706 20 29 22.2386 29 25Z"
						fill="#FAC34B"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M20.0299 32C20.9504 32 21.6966 32.7462 21.6966 33.6667V37.6667C21.6966 38.5871 20.9504 39.3333 20.0299 39.3333C19.1095 39.3333 18.3633 38.5871 18.3633 37.6667V33.6667C18.3633 32.7462 19.1095 32 20.0299 32Z"
						fill="#FAC34B"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M11.7751 30.176C12.5984 30.5876 12.9321 31.5887 12.5205 32.412L10.5205 36.412C10.1088 37.2353 9.10773 37.569 8.28443 37.1574C7.46113 36.7457 7.12743 35.7446 7.53907 34.9213L9.53907 30.9213C9.95072 30.098 10.9518 29.7643 11.7751 30.176Z"
						fill="#FAC34B"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M28.2844 30.176C29.1077 29.7643 30.1088 30.098 30.5205 30.9213L32.5205 34.9213C32.9321 35.7446 32.5984 36.7457 31.7751 37.1574C30.9518 37.569 29.9507 37.2353 29.5391 36.412L27.5391 32.412C27.1274 31.5887 27.4611 30.5876 28.2844 30.176Z"
						fill="#FAC34B"
					/>
					<rect x="19" width="2" height="7" fill="#19194B" />
					<path
						d="M18.4144 11H21.5856C28.9942 11 35 17.0058 35 24.4144C35 24.7378 34.7378 25 34.4144 25H5.58559C5.26218 25 5 24.7378 5 24.4144C5 17.0058 11.0058 11 18.4144 11Z"
						fill="#66C6EC"
						stroke="#19194B"
						stroke-width="2"
					/>
					<path
						d="M16 7H24C24.5523 7 25 7.44772 25 8V11H15V8C15 7.44772 15.4477 7 16 7Z"
						fill="#00A0DF"
						stroke="#19194B"
						stroke-width="2"
					/>
					<rect x="2" width="36" height="2" rx="1" fill="#EBECF0" />
				</svg>
			</i>
		)
	}
}
