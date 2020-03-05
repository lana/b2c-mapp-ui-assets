import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<path
						fill="#00A0DF"
						fillRule="evenodd"
						d="M17.5 6.25C17.5 9.28757 15.0376 11.75 12 11.75C8.96243 11.75 6.5 9.28757 6.5 6.25C6.5 3.21243 8.96243 0.75 12 0.75C15.0376 0.75 17.5 3.21243 17.5 6.25ZM5.2857 16.0357C7.06667 14.2547 9.48134 13.2529 12 13.25C14.5187 13.2529 16.9333 14.2547 18.7143 16.0357C20.4953 17.8167 21.4971 20.2313 21.5 22.75C21.5 22.8826 21.4473 23.0098 21.3536 23.1036C21.2598 23.1973 21.1326 23.25 21 23.25H3C2.86739 23.25 2.74021 23.1973 2.64645 23.1036C2.55268 23.0098 2.5 22.8826 2.5 22.75C2.50291 20.2313 3.50474 17.8167 5.2857 16.0357Z"
					/>
				</svg>
			</i>
		)
	}
}
