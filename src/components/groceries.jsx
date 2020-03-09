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
						d="M20.75 12.7919H20.7483C20.8746 12.7919 20.9941 12.8492 21.0731 12.9477C21.1522 13.0462 21.1823 13.1752 21.155 13.2985L19.6225 20.2294V20.2352C19.4716 20.7797 18.9654 21.1484 18.4008 21.1252H5.59917C5.03461 21.1484 4.52844 20.7797 4.3775 20.2352L2.84333 13.2985C2.81605 13.1752 2.84617 13.0462 2.92522 12.9477C3.00426 12.8492 3.12371 12.7919 3.25 12.7919H20.75ZM16.7917 15.2919C16.7917 14.9467 16.5118 14.6669 16.1667 14.6669C15.8215 14.6669 15.5417 14.9467 15.5417 15.2919V18.6252C15.5417 18.9704 15.8215 19.2502 16.1667 19.2502C16.5118 19.2502 16.7917 18.9704 16.7917 18.6252V15.2919ZM12.625 15.2919C12.625 14.9467 12.3452 14.6669 12 14.6669C11.6548 14.6669 11.375 14.9467 11.375 15.2919V18.6252C11.375 18.9704 11.6548 19.2502 12 19.2502C12.3452 19.2502 12.625 18.9704 12.625 18.6252V15.2919ZM8.875 15.2919C8.875 14.9467 8.59518 14.6669 8.25 14.6669C7.90482 14.6669 7.625 14.9467 7.625 15.2919V18.6252C7.625 18.9704 7.90482 19.2502 8.25 19.2502C8.59518 19.2502 8.875 18.9704 8.875 18.6252V15.2919ZM20.75 8.6252C21.4404 8.6252 22 9.18484 22 9.8752V10.7085C22 11.3989 21.4404 11.9585 20.75 11.9585H3.25C2.55964 11.9585 2 11.3989 2 10.7085V9.8752C2 9.18484 2.55964 8.6252 3.25 8.6252H4.51999C4.5808 8.6252 4.63859 8.59873 4.67832 8.55269L9.12418 3.36438C9.36637 3.08154 9.74106 2.94939 10.1071 3.01772C10.4731 3.08605 10.7749 3.34448 10.8987 3.69564C11.0226 4.04681 10.9497 4.43736 10.7075 4.7202L7.65501 8.28104C7.60188 8.34282 7.58965 8.42991 7.6237 8.50394C7.65776 8.57797 7.73186 8.62534 7.81334 8.6252H16.185C16.2665 8.62534 16.3406 8.57797 16.3746 8.50394C16.4087 8.42991 16.3965 8.34282 16.3433 8.28104L13.2908 4.7202C13.0486 4.43736 12.9757 4.04681 13.0996 3.69564C13.2234 3.34448 13.5252 3.08605 13.8913 3.01772C14.2573 2.94939 14.632 3.08154 14.8742 3.36438L19.3217 8.55269C19.3614 8.59873 19.4192 8.6252 19.48 8.6252H20.75Z"
						fill="#121E31"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
