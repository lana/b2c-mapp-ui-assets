import { Component } from 'preact'
import CSS from './styles.css'

class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg
					width="25"
					height="24"
					viewBox="0 0 25 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8 9.5C10.6234 9.5 12.75 7.37335 12.75 4.75C12.75 2.12665 10.6234 0 8 0C5.37665 0 3.25 2.12665 3.25 4.75C3.25 7.37335 5.37665 9.5 8 9.5ZM12.335 12.419C12.3802 12.3643 12.4133 12.3007 12.4321 12.2323C12.4509 12.1638 12.4548 12.0922 12.4438 12.0221C12.4327 11.952 12.4068 11.8851 12.3679 11.8257C12.329 11.7664 12.2779 11.716 12.218 11.678C11.2414 11.0527 10.1327 10.6631 8.97954 10.5402C7.82643 10.4173 6.66053 10.5643 5.57405 10.9697C4.48757 11.3751 3.5103 12.0278 2.71955 12.876C1.9288 13.7242 1.34624 14.7448 1.01796 15.857C0.995611 15.9319 0.991121 16.0109 1.00485 16.0878C1.01857 16.1648 1.05013 16.2374 1.097 16.2999C1.14386 16.3624 1.20472 16.4131 1.2747 16.4478C1.34468 16.4826 1.42183 16.5005 1.49996 16.5H10.14C10.2571 16.5 10.3706 16.4588 10.4605 16.3837C10.5504 16.3086 10.6111 16.2043 10.632 16.089C10.8741 14.7394 11.4607 13.4752 12.335 12.419ZM14.8888 12.0954C15.9577 11.3812 17.2144 11 18.5 11C20.2233 11.0021 21.8753 11.6876 23.0939 12.9061C24.3124 14.1247 24.9979 15.7767 25 17.5C25 18.7856 24.6188 20.0423 23.9046 21.1112C23.1903 22.1801 22.1752 23.0132 20.9874 23.5052C19.7997 23.9972 18.4928 24.1259 17.2319 23.8751C15.971 23.6243 14.8128 23.0052 13.9038 22.0962C12.9948 21.1872 12.3757 20.029 12.1249 18.7681C11.8741 17.5072 12.0028 16.2003 12.4948 15.0126C12.9868 13.8248 13.8199 12.8097 14.8888 12.0954ZM17.6768 21.3232C17.7237 21.3701 17.75 21.4337 17.75 21.5V21.75C17.75 21.9489 17.829 22.1397 17.9697 22.2803C18.1103 22.421 18.3011 22.5 18.5 22.5C18.6989 22.5 18.8897 22.421 19.0303 22.2803C19.171 22.1397 19.25 21.9489 19.25 21.75V21.443C19.2498 21.3853 19.2696 21.3294 19.3061 21.2847C19.3426 21.24 19.3934 21.2094 19.45 21.198C19.8909 21.1096 20.2913 20.8811 20.5917 20.5465C20.8921 20.2119 21.0762 19.7892 21.1167 19.3414C21.1572 18.8936 21.0518 18.4447 20.8163 18.0617C20.5809 17.6787 20.2279 17.382 19.81 17.216L17.747 16.391C17.6197 16.3396 17.5142 16.2456 17.4485 16.125C17.3829 16.0044 17.3612 15.8647 17.3872 15.7299C17.4132 15.5951 17.4853 15.4735 17.591 15.386C17.6968 15.2984 17.8297 15.2503 17.967 15.25H20C20.1989 15.25 20.3897 15.171 20.5303 15.0303C20.671 14.8897 20.75 14.6989 20.75 14.5C20.75 14.3011 20.671 14.1103 20.5303 13.9697C20.3897 13.829 20.1989 13.75 20 13.75H19.5C19.4337 13.75 19.3701 13.7237 19.3232 13.6768C19.2763 13.6299 19.25 13.5663 19.25 13.5V13.25C19.25 13.0511 19.171 12.8603 19.0303 12.7197C18.8897 12.579 18.6989 12.5 18.5 12.5C18.3011 12.5 18.1103 12.579 17.9697 12.7197C17.829 12.8603 17.75 13.0511 17.75 13.25V13.557C17.7502 13.6147 17.7304 13.6706 17.6939 13.7153C17.6574 13.76 17.6066 13.7906 17.55 13.802C17.1091 13.8904 16.7087 14.1189 16.4083 14.4535C16.1079 14.7881 15.9238 15.2108 15.8833 15.6586C15.8428 16.1064 15.9482 16.5553 16.1837 16.9383C16.4191 17.3213 16.7721 17.618 17.19 17.784L19.253 18.609C19.3803 18.6604 19.4858 18.7544 19.5515 18.875C19.6171 18.9956 19.6388 19.1353 19.6128 19.2701C19.5868 19.4049 19.5148 19.5265 19.409 19.614C19.3032 19.7016 19.1703 19.7497 19.033 19.75H17C16.8011 19.75 16.6103 19.829 16.4697 19.9697C16.329 20.1103 16.25 20.3011 16.25 20.5C16.25 20.6989 16.329 20.8897 16.4697 21.0303C16.6103 21.171 16.8011 21.25 17 21.25H17.5C17.5663 21.25 17.6299 21.2763 17.6768 21.3232Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon