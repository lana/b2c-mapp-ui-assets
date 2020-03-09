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
						d="M23.4227 0.576215C23.7893 0.94095 23.9968 1.43585 24 1.95298L23.988 9.19998C23.9927 12.6261 22.8356 15.9526 20.7056 18.6361C18.5756 21.3197 15.5987 23.2018 12.261 23.975C12.129 24.0019 11.993 24.0019 11.861 23.975C8.51624 23.232 5.52224 21.3768 3.36794 18.7125C1.21365 16.0482 0.0263699 12.7322 0 9.30598L0.012 1.96498C0.0117275 1.44741 0.216389 0.950793 0.581238 0.583696C0.946087 0.216598 1.44144 0.00888905 1.959 0.00598145H22.043C22.5601 0.00649971 23.0561 0.211479 23.4227 0.576215ZM16.7071 15.4511C16.8946 15.2636 17 15.0092 17 14.744V9.24398C17 8.97877 16.8946 8.72441 16.7071 8.53687C16.5196 8.34934 16.2652 8.24398 16 8.24398H15.75C15.6174 8.24398 15.4902 8.1913 15.3964 8.09754C15.3027 8.00377 15.25 7.87659 15.25 7.74398V6.49398C15.25 5.63203 14.9076 4.80538 14.2981 4.19588C13.6886 3.58639 12.862 3.24398 12 3.24398C11.138 3.24398 10.3114 3.58639 9.7019 4.19588C9.09241 4.80538 8.75 5.63203 8.75 6.49398V7.74398C8.75 7.87659 8.69732 8.00377 8.60355 8.09754C8.50979 8.1913 8.38261 8.24398 8.25 8.24398H8C7.73478 8.24398 7.48043 8.34934 7.29289 8.53687C7.10536 8.72441 7 8.97877 7 9.24398V14.744C7 15.0092 7.10536 15.2636 7.29289 15.4511C7.48043 15.6386 7.73478 15.744 8 15.744H16C16.2652 15.744 16.5196 15.6386 16.7071 15.4511ZM12 4.74396C11.536 4.74449 11.0912 4.92903 10.7631 5.25711C10.4351 5.58518 10.2505 6.02999 10.25 6.49396V7.74396C10.25 7.87657 10.3027 8.00374 10.3964 8.09751C10.4902 8.19128 10.6174 8.24396 10.75 8.24396H13.25C13.3826 8.24396 13.5098 8.19128 13.6036 8.09751C13.6973 8.00374 13.75 7.87657 13.75 7.74396V6.49396C13.7495 6.02999 13.5649 5.58518 13.2369 5.25711C12.9088 4.92903 12.464 4.74449 12 4.74396ZM12 13.494C12.8284 13.494 13.5 12.8224 13.5 11.994C13.5 11.1655 12.8284 10.494 12 10.494C11.1716 10.494 10.5 11.1655 10.5 11.994C10.5 12.8224 11.1716 13.494 12 13.494Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
