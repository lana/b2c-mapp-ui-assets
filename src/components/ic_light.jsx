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
					<path
						d="M28.6745 24.5816C28.6745 27.4073 24.718 29.698 19.8373 29.698C14.9566 29.698 11 27.4073 11 24.5816C11 21.756 14.9566 19.4653 19.8373 19.4653C24.718 19.4653 28.6745 21.756 28.6745 24.5816Z"
						fill="#FAC34B"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M20 0.333374C20.5523 0.333374 21 1.07957 21 2.00004V7.00004C21 7.92052 20.5523 8.66671 20 8.66671C19.4477 8.66671 19 7.92052 19 7.00004V2.00004C19 1.07957 19.4477 0.333374 20 0.333374Z"
						fill="#19194B"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M20.0002 31.3334C20.9206 31.3334 21.6668 32.0796 21.6668 33V37C21.6668 37.9205 20.9206 38.6667 20.0002 38.6667C19.0797 38.6667 18.3335 37.9205 18.3335 37V33C18.3335 32.0796 19.0797 31.3334 20.0002 31.3334Z"
						fill="#FAC34B"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M11.7454 29.5093C12.5687 29.921 12.9024 30.9221 12.4908 31.7454L10.4908 35.7454C10.0791 36.5687 9.07798 36.9024 8.25468 36.4908C7.43139 36.0791 7.09768 35.078 7.50933 34.2547L9.50933 30.2547C9.92098 29.4314 10.9221 29.0977 11.7454 29.5093Z"
						fill="#FAC34B"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M28.2547 29.5093C29.078 29.0977 30.0791 29.4314 30.4908 30.2547L32.4908 34.2547C32.9024 35.078 32.5687 36.0791 31.7454 36.4908C30.9221 36.9024 29.921 36.5687 29.5093 35.7454L27.5093 31.7454C27.0977 30.9221 27.4314 29.921 28.2547 29.5093Z"
						fill="#FAC34B"
					/>
					<path
						d="M14 10.75C19.09 8.62336 20.91 8.62336 26 10.75C31.09 12.8767 35.0168 17.4384 36.0001 22.8667C36.0201 22.9984 36.0301 23.13 36.0301 23.2634C36.0218 24.6434 34.8968 25.7567 33.5168 25.75L6.08678 25.72C4.72344 25.5084 3.78844 24.2317 4.00011 22.8667C4.98344 17.4384 8.91 12.8767 14 10.75Z"
						fill="#66C6EC"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M33.5276 23.5C33.6635 23.5007 33.776 23.3921 33.78 23.2559C33.7798 23.2451 33.7792 23.2345 33.7781 23.2237C32.9284 18.6261 29.5644 14.6778 25.1326 12.8261C22.6279 11.7796 21.2517 11.405 20 11.405C18.7483 11.405 17.3721 11.7796 14.8674 12.8261C10.4349 14.6781 7.07066 18.6274 6.22171 23.226C6.21183 23.3285 6.26575 23.4239 6.35274 23.4703L33.5276 23.5ZM6.08678 25.72C4.72344 25.5084 3.78844 24.2317 4.00011 22.8667C4.98344 17.4384 8.91 12.8767 14 10.75C19.09 8.62336 20.91 8.62336 26 10.75C31.09 12.8767 35.0168 17.4384 36.0001 22.8667C36.0201 22.9984 36.0301 23.13 36.0301 23.2634C36.0218 24.6434 34.8968 25.7567 33.5168 25.75L6.08678 25.72Z"
						fill="#19194B"
					/>
					<path
						d="M15 8C15 7.44772 15.4477 7 16 7H24C24.5523 7 25 7.44772 25 8V12H15V8Z"
						fill="#00A0DF"
						stroke="#19194B"
						stroke-width="2"
					/>
					<rect width="40" height="2" rx="1" fill="#EBECF0" />
				</svg>
			</i>
		)
	}
}
