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
						d="M21.0042 14.6985C21.0042 15.1957 20.6011 15.5988 20.1039 15.5988H16.2954C15.9129 15.5988 15.6029 15.9088 15.6029 16.2912V20.0998C15.6029 20.597 15.1999 21 14.7027 21H9.30145C8.80428 21 8.40125 20.597 8.40125 20.0998V16.2912C8.40125 15.9088 8.09123 15.5988 7.70879 15.5988H3.90021C3.66146 15.5988 3.43249 15.5039 3.26367 15.3351C3.09485 15.1663 3 14.9373 3 14.6985V9.2973C3 8.80013 3.40304 8.39709 3.90021 8.39709H7.70879C8.09123 8.39709 8.40125 8.08706 8.40125 7.70462V3.90021C8.40125 3.40304 8.80428 3 9.30145 3H14.7027C15.1999 3 15.6029 3.40304 15.6029 3.90021V7.70877C15.6029 8.09121 15.9129 8.40125 16.2954 8.40125H20.1039C20.6011 8.40125 21.0042 8.80428 21.0042 9.30145V14.6985Z"
						fill="#121E31"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
