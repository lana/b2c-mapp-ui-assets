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
						d="M6.99988 9.5C9.62323 9.5 11.7499 7.37335 11.7499 4.75C11.7499 2.12665 9.62323 0 6.99988 0C4.37653 0 2.24988 2.12665 2.24988 4.75C2.24988 7.37335 4.37653 9.5 6.99988 9.5ZM10.9789 12.241C11.0277 12.1851 11.0635 12.1191 11.0836 12.0477C11.1037 11.9763 11.1077 11.9013 11.0953 11.8281C11.0828 11.755 11.0543 11.6855 11.0117 11.6248C10.969 11.5641 10.9134 11.5136 10.8489 11.477C9.73968 10.8413 8.48434 10.5046 7.20588 10.5C5.59287 10.5073 4.02469 11.0316 2.73153 11.9957C1.43836 12.9599 0.488333 14.3132 0.0208852 15.857C-0.00138761 15.9316 -0.00592118 16.0104 0.00764584 16.0871C0.0212129 16.1638 0.0525054 16.2362 0.0990293 16.2987C0.145553 16.3612 0.206022 16.4119 0.275617 16.4468C0.345212 16.4818 0.422008 16.5 0.499885 16.5H8.63989C8.75705 16.5 8.8705 16.4588 8.96042 16.3837C9.05034 16.3086 9.11103 16.2043 9.13189 16.089C9.38669 14.6624 10.0252 13.3321 10.9789 12.241ZM13.3887 12.0954C14.4576 11.3812 15.7143 11 16.9999 11C18.7231 11.0021 20.3752 11.6876 21.5937 12.9061C22.8123 14.1247 23.4978 15.7767 23.4999 17.5C23.4999 18.7856 23.1187 20.0423 22.4044 21.1112C21.6902 22.1801 20.675 23.0132 19.4873 23.5052C18.2996 23.9972 16.9927 24.1259 15.7318 23.8751C14.4709 23.6243 13.3127 23.0052 12.4037 22.0962C11.4946 21.1872 10.8756 20.029 10.6248 18.7681C10.374 17.5072 10.5027 16.2003 10.9947 15.0126C11.4866 13.8248 12.3198 12.8097 13.3887 12.0954ZM18.4999 18.5H20.4999C20.7651 18.5 21.0195 18.3946 21.207 18.2071C21.3945 18.0196 21.4999 17.7652 21.4999 17.5C21.4999 17.2348 21.3945 16.9804 21.207 16.7929C21.0195 16.6054 20.7651 16.5 20.4999 16.5H18.4999C18.3673 16.5 18.2401 16.4473 18.1463 16.3536C18.0526 16.2598 17.9999 16.1326 17.9999 16V14C17.9999 13.7348 17.8945 13.4804 17.707 13.2929C17.5195 13.1054 17.2651 13 16.9999 13C16.7347 13 16.4803 13.1054 16.2928 13.2929C16.1052 13.4804 15.9999 13.7348 15.9999 14V16C15.9999 16.1326 15.9472 16.2598 15.8534 16.3536C15.7597 16.4473 15.6325 16.5 15.4999 16.5H13.4999C13.2347 16.5 12.9803 16.6054 12.7928 16.7929C12.6052 16.9804 12.4999 17.2348 12.4999 17.5C12.4999 17.7652 12.6052 18.0196 12.7928 18.2071C12.9803 18.3946 13.2347 18.5 13.4999 18.5H15.4999C15.6325 18.5 15.7597 18.5527 15.8534 18.6464C15.9472 18.7402 15.9999 18.8674 15.9999 19V21C15.9999 21.2652 16.1052 21.5196 16.2928 21.7071C16.4803 21.8946 16.7347 22 16.9999 22C17.2651 22 17.5195 21.8946 17.707 21.7071C17.8945 21.5196 17.9999 21.2652 17.9999 21V19C17.9999 18.8674 18.0526 18.7402 18.1463 18.6464C18.2401 18.5527 18.3673 18.5 18.4999 18.5Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
