import { Component } from 'preact'
import CSS from './styles.css'

class Icon extends Component {
	render() {
		let color = this.props.color ? CSS[this.props.color] : CSS.active
		return (
			<i className={`${CSS.icon} ${color} ${this.props.className || ''}`}>
				<svg
					width="48"
					height="48"
					viewBox="0 0 48 48"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M0 0H48V48H0V0Z" fill="white" />
					<path
						d="M21.5127 5.13081L21.5105 5.12966C21.3024 5.01909 21.064 4.97759 20.8302 5.01152C20.5964 5.04544 20.3801 5.15289 20.2127 5.31756C20.0454 5.48219 19.9356 5.69534 19.8989 5.9257C19.8622 6.15603 19.9003 6.39217 20.0078 6.59977L20.01 6.60398L20.01 6.60399C21.3038 9.13004 21.9841 11.9239 21.9959 14.7604C22.0077 17.5969 21.3505 20.3963 20.0777 22.9329L20.0669 22.9543L20.0552 22.9751C19.9301 23.1972 19.7476 23.3812 19.5272 23.5081C19.3068 23.635 19.0565 23.7004 18.8024 23.6975C18.5484 23.6946 18.2996 23.6236 18.0821 23.4916C17.8652 23.36 17.6873 23.1726 17.5674 22.9484C17.5671 22.9478 17.5667 22.9472 17.5664 22.9466L18.4488 22.476C18.0047 21.6516 17.6872 20.7654 17.5067 19.8471L21.5127 5.13081ZM21.5127 5.13081C27.3698 8.22426 31.6866 13.2102 34.2564 18.5539C36.8336 23.913 37.6106 29.5374 36.5215 33.88L36.5212 33.881C35.7908 36.8063 34.2804 39.0613 32.1605 40.593C30.0339 42.1294 27.2278 42.9849 23.8386 42.9849H23.8146L23.7907 42.986C21.1734 43.1115 18.586 42.3893 16.4152 40.928C14.2447 39.4669 12.6075 37.3454 11.7476 34.8811C10.8294 32.2415 10.7552 29.3832 11.5351 26.6999C12.315 24.0166 13.9109 21.6398 16.1035 19.8974L16.1035 19.8974L16.1065 19.8949C16.1407 19.8676 16.1817 19.8492 16.2256 19.842C16.2696 19.8348 16.3146 19.8391 16.3562 19.8543L16.3575 19.8548C16.4009 19.8705 16.4391 19.897 16.4687 19.9312C16.4977 19.9646 16.5175 20.0044 16.5268 20.0469L21.5127 5.13081Z"
						fill="#FAC34B"
						stroke="#19194B"
						stroke-width="2"
					/>
					<path
						d="M27.9312 37.7456C29.0255 36.866 29.746 35.6069 29.9484 34.2205C30.2629 32.4867 29.9883 30.6979 29.1681 29.1371C28.3479 27.5763 27.0289 26.3326 25.4199 25.6028C25.2585 25.5428 25.0824 25.5335 24.9156 25.5764C24.7487 25.6193 24.5991 25.7123 24.487 25.8427C24.3749 25.9731 24.3056 26.1347 24.2886 26.3056C24.2717 26.4765 24.3078 26.6484 24.3921 26.7982C24.6779 27.4857 24.758 28.2409 24.6228 28.9727C24.4876 29.7045 24.1428 30.3817 23.63 30.9226C23.1824 31.6349 22.5631 32.2243 21.8286 32.6372C21.0941 33.0501 20.2677 33.2733 19.4245 33.2866C19.2887 33.2547 19.1471 33.2569 19.0124 33.2931C18.8777 33.3292 18.7541 33.3983 18.6528 33.4939C18.5515 33.5895 18.4757 33.7087 18.4321 33.8408C18.3886 33.9729 18.3787 34.1138 18.4034 34.2506C18.6386 35.5719 19.3331 36.7684 20.3652 37.6302C21.3972 38.492 22.7008 38.964 24.0472 38.9635C25.4497 39.0601 26.8369 38.6251 27.9312 37.7456Z"
						fill="#E99B26"
					/>
				</svg>
			</i>
		)
	}
}

export default Icon
