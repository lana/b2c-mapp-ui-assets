import { Component } from 'preact'
import CSS from './styles.css'

export default class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<g fill="none" fillRule="evenodd">
						<path d="M0 0h24v24H0z" />
						<path
							fill="#303334"
							d="M12 22a3.83 3.83 0 0 1-3.335-1.947 3.83 3.83 0 0 1-4.717-4.718 3.83 3.83 0 0 1 0-6.67 3.828 3.828 0 0 1 4.717-4.717 3.83 3.83 0 0 1 6.67 0 3.829 3.829 0 0 1 4.717 4.717 3.83 3.83 0 0 1 0 6.67 3.83 3.83 0 0 1-4.717 4.718A3.83 3.83 0 0 1 12 22zm-2.775-4.241a1.185 1.185 0 0 1 1.176 1.045 1.682 1.682 0 0 0 3.34 0 1.185 1.185 0 0 1 1.91-.79 1.681 1.681 0 0 0 2.362-2.363 1.184 1.184 0 0 1 .791-1.91 1.68 1.68 0 0 0 0-3.34 1.184 1.184 0 0 1-.791-1.91 1.681 1.681 0 0 0-2.362-2.361 1.185 1.185 0 0 1-1.91-.791 1.682 1.682 0 0 0-3.34 0 1.185 1.185 0 0 1-1.91.79 1.68 1.68 0 0 0-2.228.134 1.68 1.68 0 0 0-.133 2.229 1.185 1.185 0 0 1-.792 1.91 1.68 1.68 0 0 0 0 3.34 1.184 1.184 0 0 1 .792 1.91 1.681 1.681 0 0 0 2.361 2.361c.212-.167.472-.254.734-.254z"
						/>
					</g>
				</svg>
			</i>
		)
	}
}
