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
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M1.838 6.06913C1.67399 6.19727 1.55404 6.3734 1.4949 6.57296C1.43575 6.77252 1.44035 6.98556 1.50805 7.18238C1.57575 7.37921 1.70317 7.55 1.87256 7.67095C2.04195 7.7919 2.24486 7.85699 2.453 7.85713H21.653C21.8571 7.85731 22.0564 7.79503 22.224 7.67866C22.3917 7.56229 22.5198 7.39739 22.591 7.20613C22.6623 7.00299 22.6676 6.78254 22.6062 6.57621C22.5448 6.36989 22.4198 6.18822 22.249 6.05713L13.168 0.245127C13.003 0.0996628 12.7939 0.0138758 12.5743 0.0015436C12.3546 -0.0107886 12.1373 0.0510496 11.957 0.177127L1.9 6.03113C1.87801 6.04149 1.85722 6.05423 1.838 6.06913ZM10.2071 11.2062C10.0196 11.3938 9.76522 11.4991 9.5 11.4991H8.75C8.6837 11.4991 8.62011 11.5255 8.57322 11.5724C8.52634 11.6192 8.5 11.6828 8.5 11.7491V16.7491C8.5 16.8154 8.52634 16.879 8.57322 16.9259C8.62011 16.9728 8.6837 16.9991 8.75 16.9991H9.5C9.76522 16.9991 10.0196 17.1045 10.2071 17.292C10.3946 17.4796 10.5 17.7339 10.5 17.9991C10.5 18.2643 10.3946 18.5187 10.2071 18.7062C10.0196 18.8938 9.76522 18.9991 9.5 18.9991H3.5C3.23478 18.9991 2.98043 18.8938 2.79289 18.7062C2.60536 18.5187 2.5 18.2643 2.5 17.9991C2.5 17.7339 2.60536 17.4796 2.79289 17.292C2.98043 17.1045 3.23478 16.9991 3.5 16.9991H4.25C4.3163 16.9991 4.37989 16.9728 4.42678 16.9259C4.47366 16.879 4.5 16.8154 4.5 16.7491V11.7491C4.5 11.6828 4.47366 11.6192 4.42678 11.5724C4.37989 11.5255 4.3163 11.4991 4.25 11.4991H3.5C3.23478 11.4991 2.98043 11.3938 2.79289 11.2062C2.60536 11.0187 2.5 10.7643 2.5 10.4991C2.5 10.2339 2.60536 9.97956 2.79289 9.79202C2.98043 9.60449 3.23478 9.49913 3.5 9.49913H9.5C9.76522 9.49913 10.0196 9.60449 10.2071 9.79202C10.3946 9.97956 10.5 10.2339 10.5 10.4991C10.5 10.7643 10.3946 11.0187 10.2071 11.2062ZM21.2071 11.2062C21.0196 11.3938 20.7652 11.4991 20.5 11.4991H19.75C19.6837 11.4991 19.6201 11.5255 19.5732 11.5724C19.5263 11.6192 19.5 11.6828 19.5 11.7491V16.7491C19.5 16.8154 19.5263 16.879 19.5732 16.9259C19.6201 16.9728 19.6837 16.9991 19.75 16.9991H20.5C20.7652 16.9991 21.0196 17.1045 21.2071 17.292C21.3946 17.4796 21.5 17.7339 21.5 17.9991C21.5 18.2643 21.3946 18.5187 21.2071 18.7062C21.0196 18.8938 20.7652 18.9991 20.5 18.9991H14.5C14.2348 18.9991 13.9804 18.8938 13.7929 18.7062C13.6054 18.5187 13.5 18.2643 13.5 17.9991C13.5 17.7339 13.6054 17.4796 13.7929 17.292C13.9804 17.1045 14.2348 16.9991 14.5 16.9991H15.25C15.3163 16.9991 15.3799 16.9728 15.4268 16.9259C15.4737 16.879 15.5 16.8154 15.5 16.7491V11.7491C15.5 11.6828 15.4737 11.6192 15.4268 11.5724C15.3799 11.5255 15.3163 11.4991 15.25 11.4991H14.5C14.2348 11.4991 13.9804 11.3938 13.7929 11.2062C13.6054 11.0187 13.5 10.7643 13.5 10.4991C13.5 10.2339 13.6054 9.97956 13.7929 9.79202C13.9804 9.60449 14.2348 9.49913 14.5 9.49913H20.5C20.7652 9.49913 21.0196 9.60449 21.2071 9.79202C21.3946 9.97956 21.5 10.2339 21.5 10.4991C21.5 10.7643 21.3946 11.0187 21.2071 11.2062ZM1.5 20.4991H22.5C22.7761 20.4991 23 20.723 23 20.9991V23.4991C23 23.7753 22.7761 23.9991 22.5 23.9991H1.5C1.22386 23.9991 1 23.7753 1 23.4991V20.9991C1 20.723 1.22386 20.4991 1.5 20.4991Z"
					/>
				</svg>
			</i>
		)
	}
}
