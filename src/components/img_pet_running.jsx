import { Component } from 'preact'

export default class Image extends Component {
	render() {
		return (
			<picture className={`${this.props.className || ''}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="293"
					height="192"
					fill="none"
					viewBox="0 0 293 192"
				>
					<mask id="a" width="304" height="192" x="-11" y="0" maskUnits="userSpaceOnUse">
						<path fill="#C4C4C4" d="M-11 0h304v192H-11z" />
					</mask>
					<g mask="url(#a)">
						<path
							stroke="#333333"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7.087"
							d="M-48.656 149.724a19.771 19.771 0 0 1-12.263 4.253 19.77 19.77 0 0 1-14.031-5.819c-7.184-7.193-7.702-18.527-1.564-26.323-9.847-1.167-17.486-9.549-17.486-19.72 0-10.172 7.639-18.553 17.486-19.72-6.138-7.796-5.62-19.13 1.564-26.323 7.185-7.193 18.507-7.711 26.294-1.567C-47.49 44.647-39.118 37-28.957 37c10.16 0 18.532 7.648 19.698 17.505C-8.093 44.647.279 37 10.44 37c10.16 0 18.532 7.648 19.698 17.505C31.304 44.647 39.676 37 49.837 37c10.16 0 18.532 7.648 19.698 17.505C70.701 44.647 79.073 37 89.234 37c10.16 0 18.532 7.648 19.698 17.505C110.098 44.647 118.47 37 128.631 37M176.187 149.724v-27.889c9.847-1.167 17.486-9.548 17.486-19.72"
						/>
						<path
							fill="white"
							fill-rule="evenodd"
							d="M193.673 102.115c0-10.172-7.639-18.553-17.486-19.72 6.138-7.796 5.62-19.13-1.564-26.323-7.185-7.193-18.506-7.712-26.294-1.567C147.163 44.647 138.791 37 128.631 37"
							clip-rule="evenodd"
						/>
						<path
							stroke="#333333"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7.087"
							d="M193.673 102.115c0-10.172-7.639-18.553-17.486-19.72 6.138-7.796 5.62-19.13-1.564-26.323-7.185-7.193-18.506-7.712-26.294-1.567C147.163 44.647 138.791 37 128.631 37"
						/>
						<path
							fill="white"
							fill-rule="evenodd"
							d="M128.631 37c-10.161 0-18.533 7.648-19.699 17.505C107.766 44.647 99.394 37 89.234 37c-10.161 0-18.533 7.648-19.699 17.505C68.369 44.647 59.997 37 49.837 37c-10.161 0-18.533 7.648-19.699 17.505C28.972 44.647 20.6 37 10.44 37 .279 37-8.093 44.648-9.259 54.505-10.425 44.647-18.797 37-28.957 37c-10.161 0-18.533 7.648-19.699 17.505-7.787-6.144-19.109-5.626-26.294 1.567-7.184 7.192-7.702 18.527-1.564 26.322C-86.361 83.562-94 91.943-94 102.115c0 10.171 7.639 18.553 17.486 19.72-6.138 7.796-5.62 19.13 1.564 26.323a19.77 19.77 0 0 0 14.031 5.819c4.339 0 8.675-1.422 12.263-4.253h224.843v-27.889c9.847-1.167 17.486-9.549 17.486-19.72 0-10.172-7.639-18.553-17.486-19.72 6.138-7.796 5.62-19.13-1.564-26.323-7.185-7.193-18.506-7.712-26.294-1.567C147.163 44.647 138.791 37 128.631 37z"
							clip-rule="evenodd"
						/>
						<path
							stroke="#333333"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7.087"
							d="M128.631 37c-10.161 0-18.533 7.648-19.699 17.505C107.766 44.647 99.394 37 89.234 37c-10.161 0-18.533 7.648-19.699 17.505C68.369 44.647 59.997 37 49.837 37c-10.161 0-18.533 7.648-19.699 17.505C28.972 44.647 20.6 37 10.44 37 .279 37-8.093 44.648-9.259 54.505-10.425 44.647-18.797 37-28.957 37c-10.161 0-18.533 7.648-19.699 17.505-7.787-6.144-19.109-5.626-26.294 1.567-7.184 7.192-7.702 18.527-1.564 26.322C-86.361 83.562-94 91.943-94 102.115c0 10.171 7.639 18.553 17.486 19.72-6.138 7.796-5.62 19.13 1.564 26.323a19.77 19.77 0 0 0 14.031 5.819c4.339 0 8.675-1.422 12.263-4.253h224.843v-27.889c9.847-1.167 17.486-9.549 17.486-19.72 0-10.172-7.639-18.553-17.486-19.72 6.138-7.796 5.62-19.13-1.564-26.323-7.185-7.193-18.506-7.712-26.294-1.567C147.163 44.647 138.791 37 128.631 37"
						/>
						<path
							fill="white"
							fill-rule="evenodd"
							d="M194.509 92.735v-1.282c0-5.707-4.622-10.334-10.322-10.334-5.701 0-10.323 4.627-10.323 10.334 0-5.707-4.621-10.334-10.322-10.334-5.701 0-10.323 4.627-10.323 10.334h-13.194c1.259 7.487 6.425 13.638 13.331 16.28.88.337 1.643.855 2.293 1.479"
							clip-rule="evenodd"
						/>
						<path
							stroke="#333333"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7.087"
							d="M194.509 92.735v-1.282c0-5.707-4.622-10.334-10.322-10.334-5.701 0-10.323 4.627-10.323 10.334 0-5.707-4.621-10.334-10.322-10.334-5.701 0-10.323 4.627-10.323 10.334h-13.194c1.259 7.487 6.425 13.638 13.331 16.28.88.337 1.643.855 2.293 1.479"
						/>
						<path
							fill="white"
							fill-rule="evenodd"
							d="M161.935 100.213c-5.694 5.699-9.216 13.573-9.216 22.27 0 17.393 14.086 31.494 31.461 31.494 17.376 0 31.462-14.101 31.462-31.494 0-13.771-8.833-25.469-21.133-29.747"
							clip-rule="evenodd"
						/>
						<path
							stroke="#333333"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7.087"
							d="M161.935 100.213c-5.694 5.699-9.216 13.573-9.216 22.27 0 17.393 14.086 31.494 31.461 31.494 17.376 0 31.462-14.101 31.462-31.494 0-13.771-8.833-25.469-21.133-29.747"
						/>
						<path
							fill="white"
							fill-rule="evenodd"
							d="M161.935 100.213c-5.694 5.699-9.216 13.573-9.216 22.27 0 17.393 14.086 31.494 31.461 31.494 17.376 0 31.462-14.101 31.462-31.494 0-13.771-8.833-25.469-21.133-29.747"
							clip-rule="evenodd"
						/>
						<path
							stroke="#333333"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7.087"
							d="M161.935 100.213c-5.694 5.699-9.216 13.573-9.216 22.27 0 17.393 14.086 31.494 31.461 31.494 17.376 0 31.462-14.101 31.462-31.494 0-13.771-8.833-25.469-21.133-29.747"
						/>
						<path
							fill="#333333"
							fill-rule="evenodd"
							d="M212.848 133.239a5.672 5.672 0 0 1-5.669 5.675 5.673 5.673 0 0 1-5.67-5.675h11.339zM200.085 112.909a4.255 4.255 0 0 1-4.252 4.257 4.255 4.255 0 0 1-4.252-4.257 4.255 4.255 0 0 1 4.252-4.257 4.255 4.255 0 0 1 4.252 4.257z"
							clip-rule="evenodd"
						/>
						<path
							stroke="#333333"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="7.087"
							d="M148.329 149.724l20.53 20.553"
						/>
					</g>
				</svg>
			</picture>
		)
	}
}
