import { Component } from 'preact'
import CSS from './styles.css'

class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg
					width="40"
					height="19"
					viewBox="0 0 40 19"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						x="1"
						y="1"
						width="38"
						height="17"
						rx="8.5"
						fill="#F4F5F7"
						stroke="#19194B"
						stroke-width="2"
					/>
					<path
						d="M10.8475 7.52427C10.7126 7.32053 10.502 7.17823 10.2618 7.12854C10.0217 7.07885 9.77146 7.12583 9.56605 7.25918L9.41174 7.35982C9.3652 7.39013 9.31129 7.40737 9.2557 7.40971C9.20011 7.41206 9.14492 7.39942 9.09596 7.37314C9.04701 7.34685 9.00611 7.3079 8.9776 7.2604C8.94909 7.21291 8.93402 7.15863 8.93399 7.10332V6.92045C8.93399 6.67633 8.83645 6.44221 8.66281 6.26959C8.48918 6.09698 8.25368 6 8.00813 6C7.76257 6 7.52708 6.09698 7.35344 6.26959C7.17981 6.44221 7.08226 6.67633 7.08226 6.92045V7.08123C7.08231 7.13682 7.06716 7.19139 7.03843 7.23909C7.0097 7.28679 6.96848 7.32583 6.91916 7.35205C6.86985 7.37826 6.8143 7.39066 6.75844 7.38792C6.70259 7.38519 6.64853 7.36741 6.60205 7.3365L6.46749 7.24691C6.26317 7.11469 6.01464 7.06793 5.77584 7.11677C5.53705 7.1656 5.32727 7.3061 5.19204 7.50776C5.05681 7.70943 5.00704 7.95597 5.05354 8.19389C5.10004 8.43181 5.23905 8.6419 5.44039 8.77855L5.94406 9.11114C5.98621 9.13955 6.02072 9.17777 6.0446 9.22248C6.06849 9.26718 6.08101 9.31702 6.08109 9.36764C6.08084 9.41771 6.06821 9.46696 6.04431 9.51104C6.02042 9.55513 5.98599 9.5927 5.94406 9.62045L5.44039 9.94936C5.33498 10.0139 5.24366 10.0988 5.17183 10.199C5.09999 10.2992 5.04911 10.4128 5.02218 10.5329C4.99524 10.653 4.99282 10.7773 5.01504 10.8983C5.03725 11.0194 5.08367 11.1348 5.15153 11.2377C5.2194 11.3407 5.30733 11.429 5.41014 11.4976C5.51295 11.5661 5.62854 11.6135 5.75008 11.6368C5.87162 11.6602 5.99664 11.6591 6.11774 11.6336C6.23884 11.6081 6.35357 11.5587 6.45514 11.4884L6.60822 11.389C6.65467 11.3583 6.70865 11.3409 6.76434 11.3385C6.82004 11.3361 6.87533 11.3489 6.92425 11.3755C6.9731 11.4019 7.01389 11.4409 7.04234 11.4884C7.0708 11.5359 7.08586 11.5902 7.08597 11.6455V11.8295C7.08597 12.0737 7.18351 12.3078 7.35715 12.4804C7.53078 12.653 7.76628 12.75 8.01183 12.75C8.25739 12.75 8.49288 12.653 8.66652 12.4804C8.84015 12.3078 8.9377 12.0737 8.9377 11.8295V11.6688C8.93788 11.6133 8.95319 11.5589 8.982 11.5114C9.01082 11.4638 9.05206 11.425 9.10134 11.3989C9.15062 11.3728 9.20608 11.3605 9.26183 11.3633C9.31758 11.3661 9.37152 11.3839 9.41791 11.4147L9.55247 11.5031C9.75679 11.6353 10.0053 11.6821 10.2441 11.6332C10.4829 11.5844 10.6927 11.4439 10.8279 11.2422C10.9631 11.0406 11.0129 10.794 10.9664 10.5561C10.9199 10.3182 10.7809 10.1081 10.5796 9.97145L10.0784 9.63886C10.0356 9.61109 10.0004 9.57315 9.97609 9.52847C9.95176 9.48379 9.93902 9.43378 9.93902 9.38298C9.93902 9.33217 9.95176 9.28217 9.97609 9.23749C10.0004 9.19281 10.0356 9.15487 10.0784 9.12709L10.5833 8.79818C10.6848 8.73183 10.7722 8.64622 10.8404 8.54627C10.9087 8.44632 10.9564 8.33398 10.981 8.21566C11.0055 8.09735 11.0063 7.97539 10.9834 7.85676C10.9605 7.73812 10.9143 7.62514 10.8475 7.52427Z"
						fill="#007CBF"
					/>
					<path
						d="M19.0975 7.52427C18.9626 7.32053 18.752 7.17823 18.5118 7.12854C18.2717 7.07885 18.0215 7.12583 17.8161 7.25918L17.6617 7.35982C17.6152 7.39013 17.5613 7.40737 17.5057 7.40971C17.4501 7.41206 17.3949 7.39942 17.346 7.37314C17.297 7.34685 17.2561 7.3079 17.2276 7.2604C17.1991 7.21291 17.184 7.15863 17.184 7.10332V6.92045C17.184 6.67633 17.0864 6.44221 16.9128 6.26959C16.7392 6.09698 16.5037 6 16.2581 6C16.0126 6 15.7771 6.09698 15.6034 6.26959C15.4298 6.44221 15.3323 6.67633 15.3323 6.92045V7.08123C15.3323 7.13682 15.3172 7.19139 15.2884 7.23909C15.2597 7.28679 15.2185 7.32583 15.1692 7.35205C15.1198 7.37826 15.0643 7.39066 15.0084 7.38792C14.9526 7.38519 14.8985 7.36741 14.852 7.3365L14.7175 7.24691C14.5132 7.11469 14.2646 7.06793 14.0258 7.11677C13.7871 7.1656 13.5773 7.3061 13.442 7.50776C13.3068 7.70943 13.257 7.95597 13.3035 8.19389C13.35 8.43181 13.489 8.6419 13.6904 8.77855L14.1941 9.11114C14.2362 9.13955 14.2707 9.17777 14.2946 9.22248C14.3185 9.26718 14.331 9.31702 14.3311 9.36764C14.3308 9.41771 14.3182 9.46696 14.2943 9.51104C14.2704 9.55513 14.236 9.5927 14.1941 9.62045L13.6904 9.94936C13.585 10.0139 13.4937 10.0988 13.4218 10.199C13.35 10.2992 13.2991 10.4128 13.2722 10.5329C13.2452 10.653 13.2428 10.7773 13.265 10.8983C13.2873 11.0194 13.3337 11.1348 13.4015 11.2377C13.4694 11.3407 13.5573 11.429 13.6601 11.4976C13.7629 11.5661 13.8785 11.6135 14.0001 11.6368C14.1216 11.6602 14.2466 11.6591 14.3677 11.6336C14.4888 11.6081 14.6036 11.5587 14.7051 11.4884L14.8582 11.389C14.9047 11.3583 14.9587 11.3409 15.0143 11.3385C15.07 11.3361 15.1253 11.3489 15.1742 11.3755C15.2231 11.4019 15.2639 11.4409 15.2923 11.4884C15.3208 11.5359 15.3359 11.5902 15.336 11.6455V11.8295C15.336 12.0737 15.4335 12.3078 15.6071 12.4804C15.7808 12.653 16.0163 12.75 16.2618 12.75C16.5074 12.75 16.7429 12.653 16.9165 12.4804C17.0902 12.3078 17.1877 12.0737 17.1877 11.8295V11.6688C17.1879 11.6133 17.2032 11.5589 17.232 11.5114C17.2608 11.4638 17.3021 11.425 17.3513 11.3989C17.4006 11.3728 17.4561 11.3605 17.5118 11.3633C17.5676 11.3661 17.6215 11.3839 17.6679 11.4147L17.8025 11.5031C18.0068 11.6353 18.2553 11.6821 18.4941 11.6332C18.7329 11.5844 18.9427 11.4439 19.0779 11.2422C19.2131 11.0406 19.2629 10.794 19.2164 10.5561C19.1699 10.3182 19.0309 10.1081 18.8296 9.97145L18.3284 9.63886C18.2856 9.61109 18.2504 9.57315 18.2261 9.52847C18.2018 9.48379 18.189 9.43378 18.189 9.38298C18.189 9.33217 18.2018 9.28217 18.2261 9.23749C18.2504 9.19281 18.2856 9.15487 18.3284 9.12709L18.8333 8.79818C18.9348 8.73183 19.0222 8.64622 19.0904 8.54627C19.1587 8.44632 19.2064 8.33398 19.231 8.21566C19.2555 8.09735 19.2563 7.97539 19.2334 7.85676C19.2105 7.73812 19.1643 7.62514 19.0975 7.52427Z"
						fill="#007CBF"
					/>
					<path
						d="M27.3475 7.52427C27.2126 7.32053 27.002 7.17823 26.7618 7.12854C26.5217 7.07885 26.2715 7.12583 26.0661 7.25918L25.9117 7.35982C25.8652 7.39013 25.8113 7.40737 25.7557 7.40971C25.7001 7.41206 25.6449 7.39942 25.596 7.37314C25.547 7.34685 25.5061 7.3079 25.4776 7.2604C25.4491 7.21291 25.434 7.15863 25.434 7.10332V6.92045C25.434 6.67633 25.3364 6.44221 25.1628 6.26959C24.9892 6.09698 24.7537 6 24.5081 6C24.2626 6 24.0271 6.09698 23.8534 6.26959C23.6798 6.44221 23.5823 6.67633 23.5823 6.92045V7.08123C23.5823 7.13682 23.5672 7.19139 23.5384 7.23909C23.5097 7.28679 23.4685 7.32583 23.4192 7.35205C23.3698 7.37826 23.3143 7.39066 23.2584 7.38792C23.2026 7.38519 23.1485 7.36741 23.102 7.3365L22.9675 7.24691C22.7632 7.11469 22.5146 7.06793 22.2758 7.11677C22.0371 7.1656 21.8273 7.3061 21.692 7.50776C21.5568 7.70943 21.507 7.95597 21.5535 8.19389C21.6 8.43181 21.739 8.6419 21.9404 8.77855L22.4441 9.11114C22.4862 9.13955 22.5207 9.17777 22.5446 9.22248C22.5685 9.26718 22.581 9.31702 22.5811 9.36764C22.5808 9.41771 22.5682 9.46696 22.5443 9.51104C22.5204 9.55513 22.486 9.5927 22.4441 9.62045L21.9404 9.94936C21.835 10.0139 21.7437 10.0988 21.6718 10.199C21.6 10.2992 21.5491 10.4128 21.5222 10.5329C21.4952 10.653 21.4928 10.7773 21.515 10.8983C21.5373 11.0194 21.5837 11.1348 21.6515 11.2377C21.7194 11.3407 21.8073 11.429 21.9101 11.4976C22.0129 11.5661 22.1285 11.6135 22.2501 11.6368C22.3716 11.6602 22.4966 11.6591 22.6177 11.6336C22.7388 11.6081 22.8536 11.5587 22.9551 11.4884L23.1082 11.389C23.1547 11.3583 23.2087 11.3409 23.2643 11.3385C23.32 11.3361 23.3753 11.3489 23.4242 11.3755C23.4731 11.4019 23.5139 11.4409 23.5423 11.4884C23.5708 11.5359 23.5859 11.5902 23.586 11.6455V11.8295C23.586 12.0737 23.6835 12.3078 23.8571 12.4804C24.0308 12.653 24.2663 12.75 24.5118 12.75C24.7574 12.75 24.9929 12.653 25.1665 12.4804C25.3402 12.3078 25.4377 12.0737 25.4377 11.8295V11.6688C25.4379 11.6133 25.4532 11.5589 25.482 11.5114C25.5108 11.4638 25.5521 11.425 25.6013 11.3989C25.6506 11.3728 25.7061 11.3605 25.7618 11.3633C25.8176 11.3661 25.8715 11.3839 25.9179 11.4147L26.0525 11.5031C26.2568 11.6353 26.5053 11.6821 26.7441 11.6332C26.9829 11.5844 27.1927 11.4439 27.3279 11.2422C27.4631 11.0406 27.5129 10.794 27.4664 10.5561C27.4199 10.3182 27.2809 10.1081 27.0796 9.97145L26.5784 9.63886C26.5356 9.61109 26.5004 9.57315 26.4761 9.52847C26.4518 9.48379 26.439 9.43378 26.439 9.38298C26.439 9.33217 26.4518 9.28217 26.4761 9.23749C26.5004 9.19281 26.5356 9.15487 26.5784 9.12709L27.0833 8.79818C27.1848 8.73183 27.2722 8.64622 27.3404 8.54627C27.4087 8.44632 27.4564 8.33398 27.481 8.21566C27.5055 8.09735 27.5063 7.97539 27.4834 7.85676C27.4605 7.73812 27.4143 7.62514 27.3475 7.52427Z"
						fill="#007CBF"
					/>
					<path
						d="M34.8475 7.52427C34.7126 7.32053 34.502 7.17823 34.2618 7.12854C34.0217 7.07885 33.7715 7.12583 33.5661 7.25918L33.4117 7.35982C33.3652 7.39013 33.3113 7.40737 33.2557 7.40971C33.2001 7.41206 33.1449 7.39942 33.096 7.37314C33.047 7.34685 33.0061 7.3079 32.9776 7.2604C32.9491 7.21291 32.934 7.15863 32.934 7.10332V6.92045C32.934 6.67633 32.8364 6.44221 32.6628 6.26959C32.4892 6.09698 32.2537 6 32.0081 6C31.7626 6 31.5271 6.09698 31.3534 6.26959C31.1798 6.44221 31.0823 6.67633 31.0823 6.92045V7.08123C31.0823 7.13682 31.0672 7.19139 31.0384 7.23909C31.0097 7.28679 30.9685 7.32583 30.9192 7.35205C30.8698 7.37826 30.8143 7.39066 30.7584 7.38792C30.7026 7.38519 30.6485 7.36741 30.602 7.3365L30.4675 7.24691C30.2632 7.11469 30.0146 7.06793 29.7758 7.11677C29.5371 7.1656 29.3273 7.3061 29.192 7.50776C29.0568 7.70943 29.007 7.95597 29.0535 8.19389C29.1 8.43181 29.239 8.6419 29.4404 8.77855L29.9441 9.11114C29.9862 9.13955 30.0207 9.17777 30.0446 9.22248C30.0685 9.26718 30.081 9.31702 30.0811 9.36764C30.0808 9.41771 30.0682 9.46696 30.0443 9.51104C30.0204 9.55513 29.986 9.5927 29.9441 9.62045L29.4404 9.94936C29.335 10.0139 29.2437 10.0988 29.1718 10.199C29.1 10.2992 29.0491 10.4128 29.0222 10.5329C28.9952 10.653 28.9928 10.7773 29.015 10.8983C29.0373 11.0194 29.0837 11.1348 29.1515 11.2377C29.2194 11.3407 29.3073 11.429 29.4101 11.4976C29.5129 11.5661 29.6285 11.6135 29.7501 11.6368C29.8716 11.6602 29.9966 11.6591 30.1177 11.6336C30.2388 11.6081 30.3536 11.5587 30.4551 11.4884L30.6082 11.389C30.6547 11.3583 30.7087 11.3409 30.7643 11.3385C30.82 11.3361 30.8753 11.3489 30.9242 11.3755C30.9731 11.4019 31.0139 11.4409 31.0423 11.4884C31.0708 11.5359 31.0859 11.5902 31.086 11.6455V11.8295C31.086 12.0737 31.1835 12.3078 31.3571 12.4804C31.5308 12.653 31.7663 12.75 32.0118 12.75C32.2574 12.75 32.4929 12.653 32.6665 12.4804C32.8402 12.3078 32.9377 12.0737 32.9377 11.8295V11.6688C32.9379 11.6133 32.9532 11.5589 32.982 11.5114C33.0108 11.4638 33.0521 11.425 33.1013 11.3989C33.1506 11.3728 33.2061 11.3605 33.2618 11.3633C33.3176 11.3661 33.3715 11.3839 33.4179 11.4147L33.5525 11.5031C33.7568 11.6353 34.0053 11.6821 34.2441 11.6332C34.4829 11.5844 34.6927 11.4439 34.8279 11.2422C34.9631 11.0406 35.0129 10.794 34.9664 10.5561C34.9199 10.3182 34.7809 10.1081 34.5796 9.97145L34.0784 9.63886C34.0356 9.61109 34.0004 9.57315 33.9761 9.52847C33.9518 9.48379 33.939 9.43378 33.939 9.38298C33.939 9.33217 33.9518 9.28217 33.9761 9.23749C34.0004 9.19281 34.0356 9.15487 34.0784 9.12709L34.5833 8.79818C34.6848 8.73183 34.7722 8.64622 34.8404 8.54627C34.9087 8.44632 34.9564 8.33398 34.981 8.21566C35.0055 8.09735 35.0063 7.97539 34.9834 7.85676C34.9605 7.73812 34.9143 7.62514 34.8475 7.52427Z"
						fill="#007CBF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon