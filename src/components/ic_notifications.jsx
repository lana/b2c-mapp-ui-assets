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
						d="M19.699 11.944C19.7026 14.4906 20.3005 17.0011 21.445 19.276V19.275C21.4834 19.3512 21.5016 19.4359 21.498 19.5212C21.4944 19.6064 21.469 19.6893 21.4243 19.762C21.3796 19.8347 21.3171 19.8947 21.2426 19.9363C21.1682 19.978 21.0843 19.9999 20.999 20H2.99898C2.9138 19.9998 2.83008 19.9779 2.75576 19.9363C2.68143 19.8947 2.61897 19.8348 2.57429 19.7622C2.52962 19.6897 2.50421 19.607 2.50048 19.5219C2.49675 19.4368 2.51482 19.3522 2.55298 19.276C3.69749 17.0011 4.29534 14.4906 4.29898 11.944V11.176C4.27655 9.79356 4.56599 8.42384 5.14579 7.16866C5.7256 5.91349 6.58086 4.80514 7.64798 3.926C8.48516 3.28287 9.46173 2.84545 10.499 2.649V1.5C10.499 1.10218 10.657 0.720644 10.9383 0.43934C11.2196 0.158035 11.6012 0 11.999 0C12.3968 0 12.7783 0.158035 13.0596 0.43934C13.3409 0.720644 13.499 1.10218 13.499 1.5V2.636C14.3301 2.78453 15.1234 3.09656 15.833 3.554C17.0513 4.41168 18.0408 5.55497 18.7148 6.88376C19.3888 8.21255 19.7267 9.68631 19.699 11.176V11.944ZM9.76297 21H14.235C14.2965 20.9997 14.3559 21.0222 14.4017 21.0632C14.4476 21.1042 14.4765 21.1608 14.483 21.222C14.4939 21.3143 14.4992 21.4071 14.499 21.5C14.499 22.163 14.2356 22.7989 13.7667 23.2678C13.2979 23.7366 12.662 24 11.999 24C11.3359 24 10.7 23.7366 10.2312 23.2678C9.76236 22.7989 9.49897 22.163 9.49897 21.5C9.49873 21.4071 9.50407 21.3143 9.51497 21.222C9.52184 21.161 9.55092 21.1047 9.59665 21.0637C9.64239 21.0228 9.70159 21.0001 9.76297 21Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
