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
						d="M12.7252 1.41574e-05C14.4677 -0.00275017 16.187 0.399337 17.7478 1.17462C19.3091 1.95013 20.6691 3.07788 21.7207 4.46899C22.7722 5.86011 23.4866 7.47659 23.8075 9.19108C24.1285 10.9056 24.0472 12.6712 23.5701 14.3489C23.093 16.0266 22.2331 17.5705 21.0581 18.8589C19.8832 20.1474 18.4254 21.1452 16.7994 21.7738C15.1735 22.4023 13.4239 22.6444 11.6886 22.481C10.1339 22.3347 8.62875 21.8664 7.26784 21.1083L1.39976 23.9048C1.02561 24.0831 0.579796 24.0063 0.286752 23.7131C-0.00629074 23.4198 -0.0830576 22.9737 0.0950969 22.5993L2.88949 16.7261C2.00405 15.1356 1.51619 13.3512 1.47158 11.5257C1.42252 9.51846 1.91112 7.53466 2.88668 5.78016C3.86224 4.02566 5.28921 2.56439 7.01951 1.548C8.74936 0.531866 10.7194 -0.0026021 12.7252 1.41574e-05ZM12.7253 0.979605L12.7239 1.95919C11.0669 1.9568 9.43952 2.39821 8.01054 3.23761C6.58156 4.07701 5.40308 5.28381 4.59741 6.73278C3.79173 8.18176 3.38821 9.8201 3.42873 11.4778C3.46924 13.1355 3.95232 14.7521 4.82782 16.1599C5.0041 16.4434 5.02397 16.7972 4.88055 17.0987L3.04857 20.9491L6.89523 19.1159C7.19633 18.9724 7.54972 18.9922 7.83294 19.1684C9.05575 19.9292 10.4384 20.3955 11.872 20.5305C13.3055 20.6654 14.7508 20.4654 16.094 19.9462C17.4371 19.427 18.6414 18.6027 19.612 17.5383C20.5826 16.4739 21.293 15.1985 21.6871 13.8126C22.0812 12.4267 22.1484 10.9681 21.8833 9.55181C21.6182 8.1355 21.028 6.80014 20.1593 5.65096C19.2907 4.50177 18.1672 3.57016 16.8774 2.92952C15.5877 2.28888 14.1669 1.95671 12.727 1.95919L12.7253 0.979605Z"
						fill="#00A0DF"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7 7.83671C7 7.29569 7.43825 6.85712 7.97887 6.85712H16.7887C17.3293 6.85712 17.7676 7.29569 17.7676 7.83671C17.7676 8.37772 17.3293 8.8163 16.7887 8.8163H7.97887C7.43825 8.8163 7 8.37772 7 7.83671Z"
						fill="#00A0DF"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7 11.2653C7 10.7243 7.43825 10.2857 7.97887 10.2857H17.7253C18.2659 10.2857 18.7042 10.7243 18.7042 11.2653C18.7042 11.8063 18.2659 12.2449 17.7253 12.2449H7.97887C7.43825 12.2449 7 11.8063 7 11.2653Z"
						fill="#00A0DF"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M7 14.6939C7 14.1529 7.43825 13.7143 7.97887 13.7143H13.7887C14.3293 13.7143 14.7676 14.1529 14.7676 14.6939C14.7676 15.2349 14.3293 15.6735 13.7887 15.6735H7.97887C7.43825 15.6735 7 15.2349 7 14.6939Z"
						fill="#00A0DF"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon