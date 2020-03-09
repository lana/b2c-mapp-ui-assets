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
						d="M18.0002 17.9888H15.514V14.0978C15.514 13.1701 15.4975 11.9768 14.2217 11.9768C12.928 11.9768 12.7307 12.9878 12.7307 14.0318V17.9888H10.2467V9.98781H12.6302V11.0821H12.6647C12.9962 10.4528 13.8077 9.78906 15.0175 9.78906C17.5352 9.78906 18.0002 11.4458 18.0002 13.6006V17.9888ZM7.443 8.89508C6.64425 8.89508 6 8.24858 6 7.45283C6 6.65708 6.64425 6.01058 7.443 6.01058C8.238 6.01058 8.88375 6.65708 8.88375 7.45283C8.88375 8.24858 8.238 8.89508 7.443 8.89508ZM8.68652 17.9888H6.19727V9.98779H8.68652V17.9888ZM12 0C5.37225 0 0 5.37225 0 12C0 18.627 5.37225 24 12 24C18.6278 24 24 18.627 24 12C24 5.37225 18.6278 0 12 0Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
