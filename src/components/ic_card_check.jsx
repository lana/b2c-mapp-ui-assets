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
						d="M17.75 4C17.8163 4 17.8799 3.97366 17.9268 3.92678C17.9737 3.87989 18 3.8163 18 3.75C18 3.08696 17.7366 2.45107 17.2678 1.98223C16.7989 1.51339 16.163 1.25 15.5 1.25H2.5C1.83696 1.25 1.20107 1.51339 0.732233 1.98223C0.263392 2.45107 0 3.08696 0 3.75C0 3.8163 0.0263392 3.87989 0.0732233 3.92678C0.120107 3.97366 0.183696 4 0.25 4H17.75ZM17.5 7.75H17.742C17.7755 7.75087 17.8089 7.74505 17.8402 7.73285C17.8714 7.72066 17.8999 7.70235 17.924 7.679C17.9481 7.65582 17.9672 7.62802 17.9803 7.59726C17.9933 7.5665 18 7.53342 18 7.5V5.75C18 5.6837 17.9737 5.62011 17.9268 5.57322C17.8799 5.52634 17.8163 5.5 17.75 5.5H0.25C0.183696 5.5 0.120107 5.52634 0.0732233 5.57322C0.0263392 5.62011 0 5.6837 0 5.75V11.75C0 12.413 0.263392 13.0489 0.732233 13.5178C1.20107 13.9866 1.83696 14.25 2.5 14.25H9.044C9.09909 14.25 9.15263 14.2318 9.19624 14.1981C9.23985 14.1645 9.27106 14.1173 9.285 14.064C9.76917 12.2545 10.8365 10.6552 12.3216 9.51372C13.8068 8.37225 15.6269 7.75234 17.5 7.75ZM3.5 10H6.5C6.69891 10 6.88968 10.079 7.03033 10.2197C7.17098 10.3603 7.25 10.5511 7.25 10.75C7.25 10.9489 7.17098 11.1397 7.03033 11.2803C6.88968 11.421 6.69891 11.5 6.5 11.5H3.5C3.30109 11.5 3.11032 11.421 2.96967 11.2803C2.82902 11.1397 2.75 10.9489 2.75 10.75C2.75 10.5511 2.82902 10.3603 2.96967 10.2197C3.11032 10.079 3.30109 10 3.5 10ZM13.8888 10.8454C14.9577 10.1312 16.2144 9.75 17.5 9.75C19.2239 9.75 20.8772 10.4348 22.0962 11.6538C23.3152 12.8728 24 14.5261 24 16.25C24 17.5356 23.6188 18.7923 22.9046 19.8612C22.1903 20.9301 21.1752 21.7632 19.9874 22.2552C18.7997 22.7472 17.4928 22.8759 16.2319 22.6251C14.971 22.3743 13.8128 21.7552 12.9038 20.8462C11.9948 19.9372 11.3757 18.779 11.1249 17.5181C10.8741 16.2572 11.0028 14.9503 11.4948 13.7626C11.9868 12.5748 12.8199 11.5597 13.8888 10.8454ZM17.968 18.487L20.868 14.613L20.872 14.615C20.9311 14.5362 20.9741 14.4465 20.9985 14.3511C21.023 14.2557 21.0284 14.1564 21.0145 14.0589C21.0005 13.9614 20.9675 13.8676 20.9174 13.7829C20.8672 13.6981 20.8008 13.6241 20.722 13.565C20.6432 13.5059 20.5535 13.4629 20.4581 13.4385C20.3627 13.414 20.2634 13.4086 20.1659 13.4225C20.0684 13.4365 19.9746 13.4695 19.8899 13.5196C19.8051 13.5698 19.7311 13.6362 19.672 13.715L16.94 17.358C16.9186 17.3868 16.8913 17.4107 16.8598 17.428C16.8283 17.4453 16.7935 17.4556 16.7577 17.4581C16.7219 17.4607 16.686 17.4555 16.6524 17.4429C16.6187 17.4303 16.5883 17.4105 16.563 17.385L15.263 16.085C15.1933 16.0153 15.1106 15.9601 15.0196 15.9224C14.9286 15.8847 14.831 15.8653 14.7325 15.8653C14.634 15.8653 14.5364 15.8847 14.4454 15.9224C14.3544 15.9601 14.2717 16.0153 14.202 16.085C14.1323 16.1547 14.0771 16.2374 14.0394 16.3284C14.0017 16.4194 13.9823 16.517 13.9823 16.6155C13.9823 16.714 14.0017 16.8116 14.0394 16.9026C14.0771 16.9936 14.1323 17.0763 14.202 17.146L15.702 18.646C15.8404 18.7856 16.0051 18.8964 16.1865 18.972C16.3679 19.0477 16.5624 19.0868 16.759 19.087H16.868C17.0839 19.0726 17.294 19.0115 17.4839 18.9079C17.6739 18.8043 17.839 18.6607 17.968 18.487Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
