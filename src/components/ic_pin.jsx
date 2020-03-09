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
						d="M1.9561 13H10.5651C11.1171 13 11.5651 12.552 11.5651 12C11.5651 11.448 11.1171 11 10.5651 11H2.5001C2.2241 11 2.0001 10.776 2.0001 10.5L1.9621 4.5C1.9621 4.224 2.1861 4 2.4621 4H21.5001C21.7761 4 22.0001 4.224 22.0001 4.5V8C22.0001 8.552 22.4481 9 23.0001 9C23.5521 9 24.0001 8.552 24.0001 8V4C24.0111 2.908 23.1361 2.014 22.0441 2H1.9561C0.864103 2.014 -0.0108974 2.908 0.000102587 4V11C-0.0108974 12.092 0.864103 12.986 1.9561 13ZM7.9721 5.992C7.7451 5.646 7.2801 5.549 6.9341 5.776L6.8091 5.858C6.6941 5.934 6.5391 5.901 6.4631 5.786C6.4361 5.745 6.4221 5.698 6.4221 5.649V5.5C6.4221 5.086 6.0861 4.75 5.6721 4.75C5.2581 4.75 4.9221 5.086 4.9221 5.5V5.631C4.9221 5.769 4.8101 5.881 4.6721 5.881C4.6221 5.881 4.5741 5.866 4.5331 5.839L4.4241 5.766C4.0821 5.532 3.6151 5.62 3.3821 5.963C3.1481 6.305 3.2361 6.771 3.5781 7.005C3.5831 7.008 3.5871 7.011 3.5921 7.014L4.0001 7.283C4.1151 7.359 4.1471 7.514 4.0711 7.629C4.0521 7.657 4.0281 7.681 4.0001 7.7L3.5921 7.968C3.2391 8.185 3.1291 8.647 3.3471 9C3.5641 9.353 4.0261 9.463 4.3791 9.245C4.3911 9.238 4.4031 9.23 4.4141 9.222L4.5381 9.141C4.6151 9.09 4.7131 9.086 4.7941 9.13C4.8751 9.174 4.9251 9.258 4.9251 9.35V9.498C4.9251 9.912 5.2611 10.248 5.6751 10.248C6.0891 10.248 6.4251 9.912 6.4251 9.498V9.367C6.4251 9.229 6.5371 9.117 6.6751 9.117C6.7251 9.117 6.7731 9.132 6.8141 9.159L6.9231 9.232C7.2761 9.449 7.7381 9.339 7.9551 8.986C8.1611 8.65 8.0731 8.213 7.7521 7.983L7.3461 7.712C7.2311 7.637 7.1981 7.483 7.2741 7.367C7.2931 7.338 7.3181 7.313 7.3461 7.295L7.7551 7.027C8.1001 6.801 8.1971 6.338 7.9721 5.992ZM12.3271 10.25C12.7411 10.25 13.0771 9.914 13.0771 9.5V9.369C13.0771 9.231 13.1891 9.119 13.3271 9.119C13.3771 9.119 13.4251 9.134 13.4661 9.161L13.5751 9.234C13.9221 9.46 14.3871 9.362 14.6131 9.015C14.8351 8.673 14.7441 8.216 14.4071 7.986L14.0001 7.715C13.8851 7.639 13.8531 7.484 13.9291 7.369C13.9481 7.341 13.9721 7.317 14.0001 7.298L14.4081 7.03C14.7611 6.813 14.8711 6.351 14.6531 5.998C14.4361 5.645 13.9741 5.535 13.6211 5.753C13.6091 5.76 13.5971 5.768 13.5861 5.776L13.4611 5.858C13.3461 5.934 13.1911 5.901 13.1151 5.786C13.0881 5.745 13.0741 5.698 13.0741 5.649V5.5C13.0741 5.086 12.7381 4.75 12.3241 4.75C11.9101 4.75 11.5741 5.086 11.5741 5.5V5.631C11.5741 5.769 11.4621 5.881 11.3241 5.881C11.2741 5.881 11.2261 5.866 11.1851 5.839L11.0761 5.766C10.7341 5.532 10.2671 5.62 10.0341 5.963C9.8011 6.306 9.8881 6.771 10.2301 7.005C10.2351 7.008 10.2391 7.011 10.2441 7.014L10.6511 7.285C10.7661 7.361 10.7981 7.516 10.7221 7.631C10.7031 7.659 10.6791 7.683 10.6511 7.702L10.2431 7.97C9.8901 8.187 9.7801 8.649 9.9981 9.002C10.2151 9.355 10.6771 9.465 11.0301 9.247C11.0421 9.24 11.0541 9.232 11.0651 9.224L11.1891 9.143C11.3041 9.067 11.4591 9.1 11.5351 9.215C11.5621 9.256 11.5761 9.303 11.5761 9.352V9.5C11.5761 9.914 11.9121 10.25 12.3261 10.25H12.3271ZM22.6641 13.098C22.5411 13.081 22.4501 12.975 22.4501 12.851V11.833C22.4501 9.9 20.8831 8.333 18.9501 8.333C17.0171 8.333 15.4501 9.9 15.4501 11.833V12.851C15.4501 12.975 15.3591 13.081 15.2361 13.098C14.4981 13.204 13.9501 13.837 13.9501 14.583V20.083C13.9501 20.911 14.6221 21.583 15.4501 21.583H22.4501C23.2781 21.583 23.9501 20.911 23.9501 20.083V14.583C23.9501 13.837 23.4021 13.204 22.6641 13.098ZM19.9501 17.833C19.9501 18.385 19.5021 18.833 18.9501 18.833C18.3981 18.833 17.9501 18.385 17.9501 17.833C17.9501 17.281 18.3981 16.833 18.9501 16.833C19.5021 16.833 19.9501 17.281 19.9501 17.833ZM17.4501 11.833C17.4501 11.005 18.1221 10.333 18.9501 10.333C19.7781 10.333 20.4501 11.005 20.4501 11.833V12.833C20.4501 12.971 20.3381 13.083 20.2001 13.083H17.7001C17.5621 13.083 17.4501 12.971 17.4501 12.833V11.833Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
