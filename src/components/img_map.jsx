import { Component } from 'preact'

export default class Image extends Component {
	render() {
		return (
			<picture className={`${this.props.className || ''}`}>
				<svg xmlns="http://www.w3.org/2000/svg" width="360" height="164" viewBox="0 0 360 164">
					<g fill="none" fill-rule="nonzero">
						<path
							fill="#45D1E3"
							d="M108.514 101.897h-3.357a2.35 2.35 0 0 1-1.679-.692L91.531 89.254a2.35 2.35 0 0 0-1.679-.692H78.448a2.35 2.35 0 0 1-1.678-.691l-8.59-8.643a2.35 2.35 0 0 0-1.679-.691h-3.357a2.37 2.37 0 0 1-2.37-2.37v-5.285a2.37 2.37 0 0 1 2.37-2.37h13.33a2.35 2.35 0 0 0 1.678-.692l21.97-21.977a2.352 2.352 0 0 0 .69-1.68v-3.357a2.37 2.37 0 0 0-2.37-2.371h-3.356a2.35 2.35 0 0 1-1.679-.691l-5.282-5.285a2.35 2.35 0 0 0-1.679-.691 2.37 2.37 0 0 0-2.37 2.37v8.643a2.37 2.37 0 0 1-2.37 2.37H78.35a2.35 2.35 0 0 1-1.679-.69l-7.504-7.606a2.356 2.356 0 0 1 0-3.359l4.295-4.296a2.352 2.352 0 0 0 .691-1.68v-1.382c0-.642-.247-1.235-.691-1.68l-1.975-1.975a2.35 2.35 0 0 0-1.678-.691H11.8a2.35 2.35 0 0 0-1.678.691l-5.283 5.284a2.352 2.352 0 0 0-.69 1.68v6.667a2.37 2.37 0 0 0 2.369 2.37 2.35 2.35 0 0 0 1.678-.691l5.283-5.284a2.35 2.35 0 0 1 1.678-.692h4.74a2.35 2.35 0 0 1 1.678.692l8.64 8.642c.444.445.691 1.037.691 1.68v14.717c0 .642.247 1.234.691 1.679l25.277 25.286a2.35 2.35 0 0 0 1.679.691h4.739a2.35 2.35 0 0 1 1.679.691l4.295 4.297c.938.938.938 2.42 0 3.358l-4.295 4.297a2.352 2.352 0 0 0-.692 1.68v14.716c0 .642.247 1.235.692 1.68l8.64 8.642c.443.445.69 1.037.69 1.68v28.05c0 .643.247 1.235.691 1.68l5.283 5.284c1.481 1.482 4.048.445 4.048-1.679v-16.693c0-.642.247-1.234.691-1.679l25.277-25.286a2.352 2.352 0 0 0 .691-1.679v-10.025c-.148-1.284-1.185-2.321-2.468-2.321zM53.468 17.79a2.35 2.35 0 0 0 1.678.692h6.665c2.123 0 3.16-2.519 1.678-4.05l-1.974-1.975a2.35 2.35 0 0 0-1.679-.692h-6.665c-2.122 0-3.16 2.519-1.678 4.05l1.975 1.975zm19.056-7.654a2.356 2.356 0 0 0 0-3.359 2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.359c.938.938 2.419.938 3.357 0zm20.982 17.68a2.35 2.35 0 0 0 1.678.691c2.123 0 3.16-2.518 1.679-4.05l-8.64-8.642a2.35 2.35 0 0 0-1.678-.691c-2.123 0-3.16 2.518-1.679 4.05l8.64 8.642zm44.037-11.705v-1.975a5.679 5.679 0 0 0-1.679-4.05 5.675 5.675 0 0 0-4.048-1.679h-21.97c-1.53 0-2.961.593-4.047 1.68a5.679 5.679 0 0 0-1.679 4.049v1.975c0 1.531.592 2.963 1.679 4.05l3.357 3.358a5.679 5.679 0 0 1 1.678 4.05v1.975c0 1.531.593 2.964 1.679 4.05l.987.988a5.69 5.69 0 0 0 8.047 0l14.317-14.322c1.086-1.186 1.679-2.618 1.679-4.149zm3.801 16.199a1.724 1.724 0 0 0-1.185-.494h-1.974c-.445 0-.89.198-1.185.494l-1.679 1.68a1.7 1.7 0 0 0 0 2.37L137 38.04c.296.296.74.494 1.185.494h1.974c.445 0 .889-.198 1.185-.494l1.679-1.68a1.7 1.7 0 0 0 0-2.37l-1.679-1.679zm17.872 11.21a2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.36c.938.937 2.419.937 3.357 0 .938-.94.938-2.47 0-3.36zm8.343.989v-5.285c0-.444-.197-.889-.494-1.185-1.036-1.037-2.863-.296-2.863 1.185v5.285c0 .444.197.888.494 1.185 1.036 1.037 2.863.296 2.863-1.185zm167.41-18.669a2.35 2.35 0 0 0-1.679-.691h-14.712a2.35 2.35 0 0 1-1.678-.691l-1.975-1.976a2.35 2.35 0 0 0-1.678-.691H291.87a2.35 2.35 0 0 1-1.679-.692l-8.64-8.642a2.35 2.35 0 0 0-1.678-.692h-18.069a2.35 2.35 0 0 0-1.678.692l-8.64 8.642a2.35 2.35 0 0 1-1.678.692h-8.048a2.35 2.35 0 0 0-1.678.691l-5.283 5.284a2.35 2.35 0 0 1-1.678.692h-21.377a2.35 2.35 0 0 1-1.678-.692l-5.135-5.234a2.35 2.35 0 0 0-1.678-.692h-11.404a2.35 2.35 0 0 0-1.679.692l-5.282 5.284a2.352 2.352 0 0 0-.692 1.679v3.358a2.37 2.37 0 0 0 2.37 2.37 2.35 2.35 0 0 0 1.679-.69l4.295-4.297a2.354 2.354 0 0 1 3.357 0c.938.938.938 2.42 0 3.358l-4.295 4.297a2.352 2.352 0 0 0-.691 1.679 2.37 2.37 0 0 1-2.37 2.37h-8.64a2.37 2.37 0 0 0-2.37 2.371c0 .642-.246 1.235-.69 1.68l-1.975 1.975a2.352 2.352 0 0 0-.692 1.679v3.358a2.37 2.37 0 0 1-2.37 2.37h-8.639a2.37 2.37 0 0 0-2.37 2.371v6.47c0 .642.247 1.234.692 1.679l1.974 1.975a2.35 2.35 0 0 0 1.679.692h1.382a2.35 2.35 0 0 0 1.679-.692l5.282-5.284a2.35 2.35 0 0 1 1.679-.691h1.382a2.35 2.35 0 0 1 1.679.691l5.282 5.284a2.35 2.35 0 0 0 1.679.692h8.047a2.35 2.35 0 0 0 1.678-.692l1.975-1.975a2.35 2.35 0 0 1 1.679-.692h4.74a2.35 2.35 0 0 1 1.678.692l4.295 4.296c.938.939.938 2.42 0 3.359l-4.295 4.296a2.35 2.35 0 0 1-1.679.692H188.59a2.35 2.35 0 0 1-1.678-.692l-5.283-5.284a2.35 2.35 0 0 0-1.678-.691h-8.097a2.35 2.35 0 0 0-1.678.691l-11.948 11.952a2.352 2.352 0 0 0-.69 1.679V97.6c0 .642.246 1.235.69 1.68l11.948 11.95a2.35 2.35 0 0 0 1.678.692h10.022a2.37 2.37 0 0 1 2.37 2.37v10.026c0 .642.247 1.235.69 1.68l5.283 5.284c.445.444.692 1.037.692 1.679v14.717c0 .642.246 1.235.69 1.68l8.64 8.642a2.35 2.35 0 0 0 1.679.691h1.382a2.35 2.35 0 0 0 1.679-.691l8.64-8.643a2.352 2.352 0 0 0 .69-1.68v-28.15c0-.641.247-1.234.692-1.679l8.64-8.642a2.352 2.352 0 0 0 .69-1.68v-4.74c0-.642-.247-1.235-.69-1.68l-14.318-14.322a2.356 2.356 0 0 1 0-3.358 2.354 2.354 0 0 1 3.357 0l10.96 10.964a2.35 2.35 0 0 0 1.679.691h4.739a2.35 2.35 0 0 0 1.679-.691l4.295-4.297a2.356 2.356 0 0 0 0-3.358l-6.665-6.667a2.356 2.356 0 0 1 0-3.358 2.354 2.354 0 0 1 3.357 0l4.295 4.296a2.35 2.35 0 0 0 1.679.692h1.382a2.35 2.35 0 0 1 1.678.691l7.653 7.655c.938.938 2.419.938 3.357 0l10.022-10.026a2.354 2.354 0 0 1 3.357 0l10.96 10.964a2.35 2.35 0 0 0 1.678.692h1.382a2.35 2.35 0 0 0 1.679-.692l5.282-5.284a2.352 2.352 0 0 0 .692-1.68v-4.493c0-.642.246-1.235.69-1.68l5.283-5.284a2.352 2.352 0 0 0 .691-1.68v-3.357a2.37 2.37 0 0 1 2.37-2.37h6.665a2.35 2.35 0 0 0 1.678-.692l11.948-11.952a2.352 2.352 0 0 0 .69-1.679V40.806a2.37 2.37 0 0 1 2.37-2.371h10.022a2.35 2.35 0 0 0 1.679-.691l5.282-5.285a2.352 2.352 0 0 0 .692-1.679v-1.383c0-.642-.247-1.234-.692-1.679l-2.221-1.877zM319.96 65.202a2.35 2.35 0 0 0 1.678-.691l8.64-8.643c1.48-1.481.444-4.05-1.679-4.05a2.35 2.35 0 0 0-1.678.692l-8.64 8.643c-1.48 1.481-.395 4.05 1.679 4.05zM281.6 99.23a2.35 2.35 0 0 0-1.678-.692c-2.123 0-3.16 2.52-1.679 4.05l8.64 8.643a2.35 2.35 0 0 0 1.678.691c2.123 0 3.16-2.519 1.679-4.05l-8.64-8.642zm7.652-5.68a2.356 2.356 0 0 0 0 3.359c.938.938 2.42.938 3.357 0a2.356 2.356 0 0 0 0-3.359 2.354 2.354 0 0 0-3.357 0zm13.33 20.002a2.356 2.356 0 0 0 0-3.358 2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.358c.987.938 2.468.938 3.357 0zm-.938-12.347l1.975-1.975c1.48-1.482.444-4.05-1.679-4.05a2.35 2.35 0 0 0-1.678.691l-1.975 1.976c-1.481 1.482-.445 4.05 1.678 4.05a2.35 2.35 0 0 0 1.679-.692zm18.316 10.717h3.357a2.35 2.35 0 0 0 1.678-.691l1.975-1.976c1.481-1.481.444-4.05-1.678-4.05h-3.358a2.35 2.35 0 0 0-1.678.692l-1.975 1.975c-1.48 1.482-.395 4.05 1.679 4.05zm28.634 29.978a2.35 2.35 0 0 0-1.679.691l-1.975 1.976c-1.48 1.481-.444 4.05 1.679 4.05a2.35 2.35 0 0 0 1.678-.692l1.975-1.976c1.481-1.481.445-4.05-1.678-4.05zm-22.266-17.928a7.022 7.022 0 0 0-4.986-2.074h-10.812c-1.876 0-3.653.741-4.986 2.074l-2.518 2.52a7.027 7.027 0 0 0-2.073 4.987v.79c0 1.877.74 3.655 2.073 4.988l2.518 2.52a7.022 7.022 0 0 0 4.986 2.073h4.147c1.876 0 3.654.741 4.987 2.075l2.517 2.518a7.022 7.022 0 0 0 4.987 2.074c3.9 0 7.06-3.16 7.06-7.062v-6.618c0-1.876-.741-3.654-2.074-4.988l-5.826-5.877z"
						/>
						<path
							fill="#FFFFFF"
							d="M112.02 98.39h-3.358a2.35 2.35 0 0 1-1.679-.691L95.036 85.747a2.35 2.35 0 0 0-1.678-.691H82.003a2.35 2.35 0 0 1-1.679-.692l-8.64-8.642a2.35 2.35 0 0 0-1.678-.692h-3.308a2.37 2.37 0 0 1-2.37-2.37v-5.285a2.37 2.37 0 0 1 2.37-2.37h13.33a2.35 2.35 0 0 0 1.679-.692l21.969-21.976a2.352 2.352 0 0 0 .69-1.68V37.3a2.37 2.37 0 0 0-2.369-2.37H98.64a2.35 2.35 0 0 1-1.678-.692l-5.283-5.284a2.35 2.35 0 0 0-1.678-.692 2.37 2.37 0 0 0-2.37 2.37v8.644a2.37 2.37 0 0 1-2.37 2.37h-3.258a2.35 2.35 0 0 1-1.679-.691l-7.652-7.655a2.356 2.356 0 0 1 0-3.359l4.295-4.296a2.352 2.352 0 0 0 .691-1.68v-1.382c0-.642-.246-1.235-.69-1.68l-1.976-1.975a2.35 2.35 0 0 0-1.678-.691H15.305a2.35 2.35 0 0 0-1.678.691l-5.283 5.285a2.352 2.352 0 0 0-.69 1.679v6.667a2.37 2.37 0 0 0 2.369 2.37 2.35 2.35 0 0 0 1.679-.69l5.282-5.285a2.35 2.35 0 0 1 1.679-.692h4.739a2.35 2.35 0 0 1 1.679.692l8.64 8.642c.443.445.69 1.038.69 1.68v14.717c0 .642.247 1.234.691 1.679L60.38 80.957a2.35 2.35 0 0 0 1.679.691h4.74a2.35 2.35 0 0 1 1.678.692l4.295 4.296c.938.939.938 2.42 0 3.358l-4.295 4.297a2.352 2.352 0 0 0-.691 1.68v14.716c0 .642.246 1.235.69 1.68l8.64 8.642c.445.445.691 1.037.691 1.68v28.05c0 .643.247 1.236.692 1.68l5.282 5.284c1.481 1.482 4.048.445 4.048-1.679v-16.692c0-.642.247-1.235.691-1.68l25.277-25.285a2.352 2.352 0 0 0 .692-1.68v-9.926c-.149-1.334-1.185-2.37-2.469-2.37zM56.972 14.285a2.35 2.35 0 0 0 1.678.691h6.665c2.123 0 3.16-2.518 1.679-4.05L65.02 8.952a2.35 2.35 0 0 0-1.679-.691h-6.664c-2.123 0-3.16 2.519-1.679 4.05l1.975 1.975zM76.029 6.63a2.356 2.356 0 0 0 0-3.358 2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.358c.938.938 2.42.938 3.357 0zm20.982 17.68a2.35 2.35 0 0 0 1.678.692c2.123 0 3.16-2.519 1.679-4.05l-8.64-8.593a2.35 2.35 0 0 0-1.678-.692c-2.123 0-3.16 2.52-1.679 4.05l8.64 8.593zm44.037-11.655V10.68a5.679 5.679 0 0 0-1.679-4.05 5.675 5.675 0 0 0-4.048-1.68h-21.969c-1.53 0-2.962.594-4.048 1.68a5.679 5.679 0 0 0-1.679 4.05v1.975c0 1.531.593 2.963 1.679 4.05l3.357 3.358a5.679 5.679 0 0 1 1.678 4.05v1.975c0 1.531.593 2.964 1.679 4.05l.987.988a5.69 5.69 0 0 0 8.047 0l14.317-14.322c1.087-1.186 1.679-2.667 1.679-4.149zm3.801 16.15a1.724 1.724 0 0 0-1.184-.494h-1.975c-.445 0-.889.197-1.185.494l-1.679 1.679a1.7 1.7 0 0 0 0 2.37l1.679 1.68c.296.296.74.493 1.185.493h1.975c.444 0 .888-.197 1.184-.494l1.679-1.679a1.7 1.7 0 0 0 0-2.37l-1.679-1.68zm17.872 14.569a2.356 2.356 0 0 0 0-3.359 2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.359c.938.889 2.419.889 3.357 0zm8.343-2.37v-5.285c0-.445-.197-.89-.493-1.186-1.037-1.037-2.864-.296-2.864 1.186v5.284c0 .445.198.889.494 1.185 1.037 1.037 2.863.297 2.863-1.185zm167.41-18.669a2.35 2.35 0 0 0-1.678-.691h-14.712a2.35 2.35 0 0 1-1.679-.692l-1.975-1.975a2.35 2.35 0 0 0-1.678-.692h-21.377a2.35 2.35 0 0 1-1.679-.691l-8.64-8.643a2.35 2.35 0 0 0-1.678-.691H265.31a2.35 2.35 0 0 0-1.678.691l-8.64 8.643a2.35 2.35 0 0 1-1.678.691h-8.047a2.35 2.35 0 0 0-1.679.692l-5.282 5.284a2.35 2.35 0 0 1-1.679.691H215.25a2.35 2.35 0 0 1-1.678-.691l-5.283-5.284a2.35 2.35 0 0 0-1.678-.692h-11.404a2.35 2.35 0 0 0-1.679.692l-5.282 5.284a2.352 2.352 0 0 0-.692 1.68v3.357a2.37 2.37 0 0 0 2.37 2.371 2.35 2.35 0 0 0 1.679-.691l4.295-4.297a2.354 2.354 0 0 1 3.357 0c.938.938.938 2.42 0 3.358l-4.295 4.297a2.352 2.352 0 0 0-.691 1.679 2.37 2.37 0 0 1-2.37 2.37h-8.64a2.37 2.37 0 0 0-2.37 2.371c0 .642-.246 1.235-.69 1.68l-1.975 1.975a2.352 2.352 0 0 0-.691 1.679v3.358a2.37 2.37 0 0 1-2.37 2.37h-8.64a2.37 2.37 0 0 0-2.37 2.371v6.667c0 .642.247 1.235.692 1.68l1.975 1.975a2.35 2.35 0 0 0 1.678.691h1.382a2.35 2.35 0 0 0 1.679-.691l5.282-5.284a2.35 2.35 0 0 1 1.679-.692h1.382a2.35 2.35 0 0 1 1.679.692l5.282 5.284a2.35 2.35 0 0 0 1.679.691h8.047a2.35 2.35 0 0 0 1.678-.691l1.975-1.975a2.35 2.35 0 0 1 1.679-.692h4.74a2.35 2.35 0 0 1 1.678.692l4.295 4.296c.938.939.938 2.42 0 3.358l-4.295 4.297a2.35 2.35 0 0 1-1.679.692h-14.712a2.35 2.35 0 0 1-1.678-.692l-5.283-5.284a2.35 2.35 0 0 0-1.678-.692h-8.047a2.35 2.35 0 0 0-1.679.692l-11.848 11.803a2.352 2.352 0 0 0-.692 1.68v11.408c0 .642.247 1.234.692 1.679l11.947 11.951a2.35 2.35 0 0 0 1.678.692h10.022a2.37 2.37 0 0 1 2.37 2.37v10.026c0 .642.247 1.234.691 1.679l5.283 5.284c.444.445.69 1.037.69 1.68v14.716c0 .642.248 1.235.692 1.68l8.64 8.642a2.35 2.35 0 0 0 1.678.692h1.382a2.35 2.35 0 0 0 1.679-.692l8.64-8.642a2.352 2.352 0 0 0 .69-1.68v-28.1c0-.642.247-1.235.692-1.68l8.64-8.642a2.352 2.352 0 0 0 .69-1.68v-4.74c0-.642-.246-1.235-.69-1.68L212.83 83.327a2.356 2.356 0 0 1 0-3.358 2.354 2.354 0 0 1 3.357 0l10.96 10.964a2.35 2.35 0 0 0 1.679.691h4.74a2.35 2.35 0 0 0 1.678-.691l4.295-4.297a2.356 2.356 0 0 0 0-3.358l-6.665-6.667a2.356 2.356 0 0 1 0-3.359 2.354 2.354 0 0 1 3.357 0l4.295 4.297a2.35 2.35 0 0 0 1.679.691h1.382a2.35 2.35 0 0 1 1.679.692l7.652 7.655c.938.938 2.419.938 3.357 0l10.022-10.026a2.354 2.354 0 0 1 3.357 0l10.96 10.964a2.35 2.35 0 0 0 1.678.692h1.383a2.35 2.35 0 0 0 1.678-.692l5.283-5.284a2.352 2.352 0 0 0 .69-1.68v-4.74c0-.642.248-1.235.692-1.68l5.282-5.284a2.352 2.352 0 0 0 .692-1.68V63.82a2.37 2.37 0 0 1 2.37-2.37h6.664a2.35 2.35 0 0 0 1.679-.692l11.947-11.952a2.352 2.352 0 0 0 .691-1.679V37.102a2.37 2.37 0 0 1 2.37-2.371h10.022a2.35 2.35 0 0 0 1.678-.691l5.283-5.285a2.352 2.352 0 0 0 .69-1.679v-1.383c0-.642-.246-1.234-.69-1.679l-2.222-1.679zm-15.008 39.361a2.35 2.35 0 0 0 1.678-.691l8.64-8.643c1.481-1.482.444-4.05-1.679-4.05a2.35 2.35 0 0 0-1.678.692l-8.64 8.642c-1.48 1.531-.444 4.05 1.679 4.05zm-38.36 34.027a2.35 2.35 0 0 0-1.678-.691c-2.123 0-3.16 2.519-1.679 4.05l8.64 8.642a2.35 2.35 0 0 0 1.678.692c2.123 0 3.16-2.52 1.679-4.05l-8.64-8.643zm7.652-5.68a2.356 2.356 0 0 0 0 3.36c.938.937 2.42.937 3.358 0a2.356 2.356 0 0 0 0-3.36 2.446 2.446 0 0 0-3.358 0zm13.33 16.694a2.354 2.354 0 0 0-3.357 0 2.356 2.356 0 0 0 0 3.358c.938.938 2.42.938 3.357 0a2.356 2.356 0 0 0 0-3.358zm-.938-9.038l1.975-1.976c1.48-1.481.444-4.05-1.679-4.05a2.35 2.35 0 0 0-1.678.692l-1.975 1.975c-1.481 1.482-.444 4.05 1.679 4.05.592 0 1.234-.247 1.678-.691zm18.316 10.717h3.357a2.35 2.35 0 0 0 1.679-.692l1.974-1.975c1.481-1.482.445-4.05-1.678-4.05h-3.357a2.35 2.35 0 0 0-1.679.691l-1.975 1.976c-1.48 1.482-.444 4.05 1.679 4.05zm28.634 30.027a2.35 2.35 0 0 0-1.679.691l-1.974 1.976c-1.482 1.481-.445 4.05 1.678 4.05a2.35 2.35 0 0 0 1.679-.692l1.974-1.976c1.481-1.53.395-4.05-1.678-4.05zm-22.265-17.977a7.022 7.022 0 0 0-4.987-2.074h-10.812c-1.876 0-3.653.74-4.986 2.074l-2.518 2.519a7.027 7.027 0 0 0-2.073 4.988v.79c0 1.877.74 3.654 2.073 4.988l2.518 2.519a7.022 7.022 0 0 0 4.986 2.074h4.147c1.876 0 3.654.74 4.987 2.074l2.518 2.519a7.022 7.022 0 0 0 4.986 2.074c3.9 0 7.06-3.16 7.06-7.062v-6.667c0-1.877-.741-3.655-2.074-4.988l-5.825-5.828z"
						/>
						<path
							fill="#000000"
							d="M339.363 21.495a3.508 3.508 0 0 0-2.518-1.037h-14.712c-.296 0-.592-.098-.79-.345l-1.975-1.976a3.508 3.508 0 0 0-2.518-1.037h-21.376c-.296 0-.593-.099-.79-.346l-8.64-8.642a3.508 3.508 0 0 0-2.517-1.037h-18.07a3.63 3.63 0 0 0-2.517 1.037l-8.64 8.642a1.165 1.165 0 0 1-.79.346h-8.047a3.63 3.63 0 0 0-2.518 1.037l-5.282 5.284a1.165 1.165 0 0 1-.79.346h-21.377c-.296 0-.592-.099-.79-.346l-5.282-5.284a3.508 3.508 0 0 0-2.518-1.037h-11.404a3.63 3.63 0 0 0-2.518 1.037l-5.282 5.284a3.51 3.51 0 0 0-1.037 2.52v3.357c0 1.976 1.629 3.606 3.604 3.606a3.63 3.63 0 0 0 2.518-1.037l4.295-4.297c.444-.445 1.184-.445 1.58 0a1.103 1.103 0 0 1 0 1.58l-4.296 4.297a3.51 3.51 0 0 0-1.036 2.519c0 .642-.494 1.136-1.136 1.136h-8.64c-1.974 0-3.603 1.63-3.603 3.605 0 .296-.1.592-.346.79l-1.975 1.975a3.51 3.51 0 0 0-1.036 2.52v3.357c0 .642-.494 1.136-1.136 1.136h-8.64c-1.974 0-3.603 1.63-3.603 3.605v6.668c0 .938.395 1.876 1.036 2.518l1.975 1.976a3.508 3.508 0 0 0 2.518 1.037h1.382a3.63 3.63 0 0 0 2.518-1.037l5.283-5.285c.197-.197.493-.345.79-.345h1.382c.296 0 .592.099.79.345l5.282 5.235a3.508 3.508 0 0 0 2.518 1.038h8.047a3.63 3.63 0 0 0 2.518-1.038l1.975-1.975c.197-.198.493-.346.79-.346h4.739c.296 0 .592.1.79.346l4.295 4.297a1.103 1.103 0 0 1 0 1.58l-4.295 4.297a1.165 1.165 0 0 1-.79.345h-14.712c-.296 0-.592-.098-.79-.345l-5.332-5.235a3.508 3.508 0 0 0-2.518-1.037h-8.047a3.63 3.63 0 0 0-2.517 1.037l-11.948 11.951a3.51 3.51 0 0 0-1.036 2.519v11.408c0 .939.394 1.877 1.036 2.519l11.948 11.951a3.508 3.508 0 0 0 2.517 1.038h10.022c.642 0 1.136.493 1.136 1.135v10.026c0 .938.395 1.877 1.036 2.519l5.283 5.284c.197.197.345.494.345.79v14.717c0 .939.395 1.877 1.037 2.519l8.64 8.643a3.508 3.508 0 0 0 2.518 1.037h1.382a3.63 3.63 0 0 0 2.518-1.037l8.64-8.643a3.51 3.51 0 0 0 1.036-2.519v-27.952c0-.297.099-.593.346-.79l8.64-8.643a3.51 3.51 0 0 0 1.036-2.519v-4.741c0-.938-.395-1.877-1.037-2.519L213.62 82.537a1.166 1.166 0 0 1-.345-.79c0-.296.098-.593.345-.79.445-.445 1.185-.445 1.58 0l10.96 10.964a3.508 3.508 0 0 0 2.518 1.037h4.74a3.63 3.63 0 0 0 2.517-1.037l4.295-4.297a3.51 3.51 0 0 0 1.037-2.519c0-.938-.395-1.876-1.037-2.518l-6.665-6.668a1.166 1.166 0 0 1-.345-.79c0-.296.098-.592.345-.79.445-.445 1.185-.445 1.58 0l4.295 4.297a3.508 3.508 0 0 0 2.518 1.037h1.382c.296 0 .593.098.79.345l7.652 7.655c1.383 1.383 3.703 1.383 5.085 0l10.022-10.025a1.103 1.103 0 0 1 1.58 0l10.96 10.964a3.508 3.508 0 0 0 2.518 1.037h1.382a3.63 3.63 0 0 0 2.518-1.037l5.282-5.285a3.51 3.51 0 0 0 1.037-2.518v-4.742c0-.296.099-.592.346-.79l5.282-5.284a3.51 3.51 0 0 0 1.037-2.519v-3.358c0-.642.494-1.136 1.135-1.136h6.665a3.63 3.63 0 0 0 2.518-1.037l11.947-11.952a3.51 3.51 0 0 0 1.037-2.518V37.447c0-.642.494-1.136 1.135-1.136h10.022a3.63 3.63 0 0 0 2.518-1.037l5.283-5.284a3.51 3.51 0 0 0 1.036-2.519v-1.383c0-.938-.395-1.876-1.036-2.518l-1.728-2.075zm.543 5.877c0 .297-.099.593-.346.79l-5.282 5.285a1.165 1.165 0 0 1-.79.346h-10.022c-1.975 0-3.604 1.63-3.604 3.605v10.025c0 .297-.099.593-.346.79L307.57 60.165a1.165 1.165 0 0 1-.79.346h-6.665c-1.974 0-3.603 1.63-3.603 3.605v3.358c0 .297-.1.593-.346.79l-5.283 5.285a3.51 3.51 0 0 0-1.036 2.518v4.742c0 .296-.099.592-.346.79l-5.282 5.284a1.165 1.165 0 0 1-.79.346h-1.383c-.296 0-.592-.099-.79-.346l-10.96-10.964c-1.382-1.382-3.702-1.382-5.084 0l-10.022 10.026a1.103 1.103 0 0 1-1.58 0l-7.652-7.655a3.508 3.508 0 0 0-2.518-1.037h-1.382c-.297 0-.593-.099-.79-.346l-4.295-4.297a3.508 3.508 0 0 0-2.518-1.037 3.63 3.63 0 0 0-2.518 1.037 3.51 3.51 0 0 0-1.037 2.52c0 .937.395 1.876 1.037 2.518l6.665 6.667c.197.198.345.494.345.79 0 .297-.098.593-.345.79l-4.295 4.297a1.165 1.165 0 0 1-.79.346h-4.74c-.296 0-.592-.099-.79-.346l-10.96-10.964a3.508 3.508 0 0 0-2.517-1.037 3.63 3.63 0 0 0-2.518 1.037 3.51 3.51 0 0 0-1.037 2.519c0 .938.395 1.877 1.037 2.519l14.317 14.322c.197.197.346.494.346.79v4.741c0 .296-.1.593-.346.79l-8.64 8.643a3.51 3.51 0 0 0-1.036 2.519v28.051c0 .296-.099.593-.346.79l-8.64 8.643a1.165 1.165 0 0 1-.79.346h-1.382c-.296 0-.592-.1-.79-.346l-8.64-8.643a1.166 1.166 0 0 1-.345-.79v-14.717c0-.938-.395-1.877-1.036-2.519l-5.283-5.284a1.166 1.166 0 0 1-.345-.79v-10.026c0-1.975-1.63-3.605-3.604-3.605h-10.022c-.297 0-.593-.099-.79-.346l-11.947-11.951a1.166 1.166 0 0 1-.346-.79V82.685c0-.296.099-.592.346-.79l11.947-11.951c.197-.198.493-.346.79-.346h8.047c.296 0 .592.099.79.346l5.282 5.284a3.508 3.508 0 0 0 2.518 1.037h14.712a3.63 3.63 0 0 0 2.518-1.037l4.295-4.297c1.382-1.383 1.382-3.704 0-5.087l-4.295-4.296a3.508 3.508 0 0 0-2.518-1.037h-4.74a3.63 3.63 0 0 0-2.517 1.037l-1.975 1.975a1.165 1.165 0 0 1-.79.346h-8.047c-.296 0-.593-.099-.79-.346l-5.282-5.284a3.508 3.508 0 0 0-2.518-1.037h-1.383a3.63 3.63 0 0 0-2.517 1.037l-5.332 5.235a1.165 1.165 0 0 1-.79.346h-1.382c-.297 0-.593-.1-.79-.346l-1.975-1.976a1.166 1.166 0 0 1-.346-.79v-6.667c0-.642.494-1.136 1.136-1.136h8.64c1.974 0 3.603-1.63 3.603-3.605v-3.358c0-.297.099-.593.346-.79l1.975-1.976a3.51 3.51 0 0 0 1.036-2.519c0-.642.494-1.136 1.136-1.136h8.64c1.974 0 3.603-1.63 3.603-3.605 0-.296.099-.592.346-.79l4.295-4.297c1.382-1.382 1.382-3.704 0-5.086a3.508 3.508 0 0 0-2.518-1.037 3.63 3.63 0 0 0-2.518 1.037l-4.295 4.296a1.165 1.165 0 0 1-.79.346 1.117 1.117 0 0 1-1.135-1.136v-3.358c0-.297.099-.593.345-.79l5.283-5.285c.197-.197.494-.345.79-.345h11.404c.296 0 .592.098.79.345l5.134 5.383a3.508 3.508 0 0 0 2.518 1.038h21.377a3.63 3.63 0 0 0 2.518-1.038l5.282-5.284c.198-.198.494-.346.79-.346h8.047a3.63 3.63 0 0 0 2.518-1.037l8.64-8.642c.197-.198.493-.346.79-.346h18.118c.296 0 .592.099.79.346l8.64 8.642a3.508 3.508 0 0 0 2.517 1.037h21.377c.296 0 .592.1.79.346l1.974 1.975a3.508 3.508 0 0 0 2.518 1.038h14.712c.296 0 .593.098.79.345l1.975 1.976c.197.197.345.494.345.79v1.333h.05zM54.159 13.198l1.975 1.976a3.508 3.508 0 0 0 2.517 1.037h6.665c1.481 0 2.765-.84 3.308-2.222.543-1.383.247-2.865-.79-3.902l-1.975-1.975a3.508 3.508 0 0 0-2.518-1.037h-6.664c-1.481 0-2.765.84-3.308 2.222-.543 1.383-.247 2.864.79 3.901zm1.48-2.963c.05-.148.346-.691 1.038-.691h6.664c.297 0 .593.099.79.346l1.975 1.975c.494.494.296 1.037.247 1.235-.05.148-.346.691-1.037.691h-6.665c-.296 0-.592-.099-.79-.346l-1.974-1.975c-.494-.494-.297-1.037-.247-1.235zM96.123 25.2a3.508 3.508 0 0 0 2.518 1.038c1.481 0 2.765-.84 3.308-2.223.543-1.383.247-2.864-.79-3.901l-8.64-8.643a3.508 3.508 0 0 0-2.517-1.037c-1.482 0-2.765.84-3.308 2.222-.543 1.383-.247 2.865.79 3.902l8.64 8.642zm-7.109-11.605c.05-.149.346-.692 1.037-.692.296 0 .592.099.79.346l8.64 8.642c.493.494.296 1.038.246 1.235-.05.148-.345.692-1.037.692-.296 0-.592-.1-.79-.346l-8.639-8.643c-.494-.494-.346-1.086-.247-1.234zM355.408 139.38c-.543-1.383-1.827-2.222-3.308-2.222a3.63 3.63 0 0 0-2.518 1.037l-1.975 1.975a3.588 3.588 0 0 0-.79 3.902 3.553 3.553 0 0 0 3.308 2.222 3.63 3.63 0 0 0 2.518-1.037l1.975-1.975c1.086-.988 1.382-2.52.79-3.902zm-2.518 2.173l-1.975 1.975a1.165 1.165 0 0 1-.79.346c-.691 0-.987-.543-1.037-.691-.049-.148-.246-.741.247-1.235l1.975-1.975c.197-.198.494-.346.79-.346.691 0 .987.543 1.037.691.049.198.246.741-.247 1.235zm-49.418-41.93a3.63 3.63 0 0 0 2.517-1.036l1.975-1.976a3.588 3.588 0 0 0 .79-3.901c-.543-1.383-1.827-2.223-3.308-2.223a3.63 3.63 0 0 0-2.518 1.037l-1.974 1.976a3.588 3.588 0 0 0-.79 3.901 3.553 3.553 0 0 0 3.308 2.223zm-.79-4.395l1.974-1.975c.198-.198.494-.346.79-.346.691 0 .988.544 1.037.692.05.148.247.74-.247 1.234l-1.975 1.976a1.165 1.165 0 0 1-.79.346c-.69 0-.987-.544-1.036-.692-.099-.148-.247-.74.247-1.235zm-190.663 1.927h-3.357c-.296 0-.592-.1-.79-.346L95.925 84.858a3.508 3.508 0 0 0-2.518-1.037H82.003c-.296 0-.593-.099-.79-.346l-8.64-8.642a3.508 3.508 0 0 0-2.517-1.037h-3.358a1.117 1.117 0 0 1-1.135-1.136v-5.285c0-.642.494-1.135 1.135-1.135h13.33a3.63 3.63 0 0 0 2.518-1.038l21.969-21.977a3.51 3.51 0 0 0 1.037-2.518v-3.359c0-1.975-1.63-3.605-3.604-3.605H98.59c-.296 0-.593-.099-.79-.345l-5.233-5.235a3.508 3.508 0 0 0-2.518-1.038c-1.975 0-3.604 1.63-3.604 3.606v8.642c0 .642-.494 1.136-1.135 1.136h-3.308c-.296 0-.593-.099-.79-.346L73.56 32.51a1.103 1.103 0 0 1 0-1.58l4.295-4.297a3.51 3.51 0 0 0 1.037-2.52V22.73c0-.938-.395-1.877-1.037-2.519l-1.975-1.975a3.508 3.508 0 0 0-2.518-1.037H15.305a3.63 3.63 0 0 0-2.517 1.037L7.456 23.42a3.51 3.51 0 0 0-1.037 2.52v6.666c0 1.976 1.63 3.606 3.604 3.606a3.63 3.63 0 0 0 2.518-1.038l5.282-5.284c.198-.197.494-.346.79-.346h4.74c.296 0 .592.1.79.346l8.639 8.643c.198.197.346.494.346.79V54.04c0 .938.395 1.877 1.036 2.519l25.277 25.286a3.508 3.508 0 0 0 2.518 1.037h4.74c.296 0 .592.099.79.346l4.294 4.296a1.103 1.103 0 0 1 0 1.58l-4.295 4.297a3.51 3.51 0 0 0-1.036 2.519v14.717c0 .938.395 1.877 1.036 2.519l8.64 8.642c.197.198.345.494.345.79v28.052c0 .938.395 1.877 1.037 2.519l5.283 5.284a3.508 3.508 0 0 0 3.9.741c1.382-.543 2.221-1.827 2.221-3.309v-16.693c0-.296.1-.592.346-.79l25.277-25.286a3.51 3.51 0 0 0 1.037-2.518v-9.828c0-1.976-1.58-3.605-3.555-3.605zm1.086 13.58c0 .297-.099.593-.345.791l-25.277 25.286a3.51 3.51 0 0 0-1.037 2.519v16.692c0 .692-.543.988-.691 1.037-.148.05-.74.247-1.234-.247l-5.283-5.284a1.166 1.166 0 0 1-.345-.79v-28.052c0-.938-.395-1.876-1.037-2.518l-8.64-8.643a1.166 1.166 0 0 1-.345-.79V96.02c0-.297.098-.593.345-.79l4.295-4.297c1.383-1.383 1.383-3.704 0-5.087l-4.295-4.297a3.508 3.508 0 0 0-2.518-1.037H61.96c-.296 0-.592-.099-.79-.345L35.892 54.83a1.166 1.166 0 0 1-.345-.79V39.324c0-.938-.395-1.877-1.037-2.519l-8.64-8.642a3.508 3.508 0 0 0-2.517-1.038h-4.74a3.63 3.63 0 0 0-2.518 1.038l-5.282 5.284a1.165 1.165 0 0 1-.79.346 1.117 1.117 0 0 1-1.135-1.136V25.99c0-.297.098-.593.345-.79l5.283-5.285c.197-.198.493-.346.79-.346h58.057c.296 0 .593.1.79.346l1.975 1.975c.197.198.345.494.345.79v1.383c0 .297-.098.593-.345.79l-4.295 4.297c-1.383 1.383-1.383 3.704 0 5.087l7.652 7.655a3.508 3.508 0 0 0 2.518 1.037h3.357c1.975 0 3.604-1.63 3.604-3.605V30.68c0-.642.494-1.136 1.135-1.136.297 0 .593.1.79.346l5.283 5.284a3.508 3.508 0 0 0 2.517 1.038h3.358c.641 0 1.135.493 1.135 1.135v3.359c0 .296-.099.592-.346.79L80.867 63.474a1.165 1.165 0 0 1-.79.346h-13.33c-1.974 0-3.603 1.63-3.603 3.605v5.284c0 1.976 1.63 3.605 3.604 3.605h3.357c.296 0 .592.1.79.346l8.64 8.643a3.508 3.508 0 0 0 2.517 1.037h11.306c.296 0 .592.099.79.346l11.947 11.951a3.508 3.508 0 0 0 2.518 1.037h3.357c.642 0 1.135.494 1.135 1.136v9.927zM74.351 8.557c.938 0 1.826-.346 2.517-1.037 1.383-1.383 1.383-3.704 0-5.087a3.508 3.508 0 0 0-2.517-1.037 3.63 3.63 0 0 0-2.518 1.037c-1.383 1.383-1.383 3.704 0 5.087a3.508 3.508 0 0 0 2.518 1.037zm-.79-4.346c.197-.197.493-.346.79-.346.296 0 .592.1.79.346a1.103 1.103 0 0 1 0 1.58 1.103 1.103 0 0 1-1.58 0c-.445-.444-.445-1.185 0-1.58zm95.825 39.707c.395 0 .74-.05 1.135-.247a2.85 2.85 0 0 0 1.777-2.667V35.72c0-.741-.296-1.531-.839-2.075a2.895 2.895 0 0 0-3.16-.642 2.85 2.85 0 0 0-1.777 2.667v5.334c0 .79.297 1.482.84 2.074a2.88 2.88 0 0 0 2.024.84zm-.445-8.198c0-.247.148-.346.247-.395.05 0 .099-.05.198-.05.098 0 .197.05.296.148.099.1.148.198.148.297v5.284a.408.408 0 0 1-.247.395c-.099.05-.296.099-.494-.099-.098-.098-.148-.197-.148-.296V35.72zm117.054 59.165a3.508 3.508 0 0 0-2.518-1.037c-1.48 0-2.765.84-3.308 2.222-.543 1.383-.246 2.864.79 3.902l8.64 8.642a3.508 3.508 0 0 0 2.518 1.037c1.48 0 2.764-.84 3.307-2.222.543-1.383.247-2.865-.79-3.902l-8.639-8.642zm7.11 11.606c-.05.148-.347.691-1.038.691-.296 0-.592-.099-.79-.346l-8.64-8.642c-.493-.494-.295-1.087-.246-1.235.05-.148.346-.691 1.037-.691.296 0 .592.098.79.345l8.64 8.643c.493.494.345 1.037.246 1.235zm37.618 13.136c-1.58-1.58-3.653-2.42-5.875-2.42h-10.812c-2.221 0-4.295.89-5.874 2.42l-2.518 2.52c-1.58 1.58-2.42 3.654-2.42 5.876v.79c0 2.223.89 4.297 2.42 5.877l2.518 2.519c1.58 1.58 3.653 2.42 5.874 2.42h4.147c1.58 0 3.012.593 4.147 1.728l2.518 2.52c1.58 1.58 3.654 2.42 5.875 2.42a8.282 8.282 0 0 0 8.294-8.298v-6.667c0-2.222-.889-4.297-2.419-5.877l-5.875-5.828zm5.826 18.372c0 3.21-2.617 5.828-5.826 5.828-1.58 0-3.011-.593-4.147-1.729l-2.518-2.518c-1.58-1.58-3.653-2.42-5.875-2.42h-4.147c-1.58 0-3.011-.593-4.147-1.729l-2.517-2.519a5.868 5.868 0 0 1-1.728-4.148v-.79c0-1.58.592-3.013 1.728-4.149l2.517-2.518a5.864 5.864 0 0 1 4.147-1.729h10.812c1.58 0 3.012.593 4.147 1.729l5.875 5.877a5.868 5.868 0 0 1 1.728 4.148v6.667h-.05zm-13.083-75.067a3.63 3.63 0 0 0 2.518-1.037l8.64-8.643a3.588 3.588 0 0 0 .79-3.902c-.544-1.382-1.827-2.222-3.309-2.222a3.63 3.63 0 0 0-2.517 1.037l-8.64 8.643a3.588 3.588 0 0 0-.79 3.901c.543 1.383 1.827 2.223 3.308 2.223zm-.79-4.396l8.64-8.642c.197-.198.493-.346.79-.346.69 0 .987.543 1.036.691.05.149.247.741-.247 1.235l-8.64 8.643a1.165 1.165 0 0 1-.79.345c-.69 0-.986-.543-1.036-.691-.05-.148-.247-.74.247-1.235zm-15.7 52.4a3.51 3.51 0 0 0 1.037-2.52c0-.938-.394-1.876-1.036-2.518-1.383-1.383-3.703-1.383-5.085 0a3.51 3.51 0 0 0-1.037 2.519c0 .938.395 1.876 1.037 2.518a3.592 3.592 0 0 0 2.518 1.037c.938 0 1.876-.345 2.567-1.037zm-3.356-1.73a1.166 1.166 0 0 1-.346-.79c0-.296.099-.592.346-.79a1.103 1.103 0 0 1 1.58 0c.197.198.345.494.345.79 0 .297-.099.593-.346.79-.395.445-1.135.445-1.58 0zm-9.183-21.087a3.63 3.63 0 0 0-2.518 1.037c-1.382 1.383-1.382 3.704 0 5.087a3.508 3.508 0 0 0 2.518 1.037 3.63 3.63 0 0 0 2.518-1.037c1.382-1.383 1.382-3.704 0-5.087a3.63 3.63 0 0 0-2.518-1.037zm.79 4.395c-.444.445-1.185.445-1.58 0a1.103 1.103 0 0 1 0-1.58c.198-.198.494-.346.79-.346.296 0 .592.099.79.346a1.103 1.103 0 0 1 0 1.58zM142.282 12.655V10.68c0-1.828-.74-3.605-2.024-4.89-1.284-1.333-3.06-2.024-4.887-2.024H113.4c-1.826 0-3.604.74-4.887 2.024-1.284 1.334-2.024 3.062-2.024 4.89v1.975c0 1.828.74 3.605 2.024 4.89l3.357 3.358c.84.84 1.284 1.975 1.284 3.16v1.976c0 1.827.74 3.605 2.024 4.89l.987.987a6.916 6.916 0 0 0 4.888 2.025 6.916 6.916 0 0 0 4.887-2.025l14.317-14.322c1.284-1.383 2.024-3.111 2.024-4.939zm-2.468 0c0 1.185-.445 2.321-1.284 3.161l-14.317 14.322c-1.728 1.729-4.591 1.729-6.319 0l-.987-.988c-.84-.84-1.284-1.975-1.284-3.16v-1.976c0-1.827-.74-3.605-2.024-4.89l-3.357-3.357c-.84-.84-1.284-1.976-1.284-3.161V10.63c0-1.185.445-2.32 1.284-3.16.84-.84 1.975-1.284 3.16-1.284h21.92c1.184 0 2.32.444 3.159 1.284.84.84 1.283 1.975 1.283 3.16v2.025h.05zm5.924 15.31a2.91 2.91 0 0 0-2.073-.84h-1.975c-.79 0-1.481.297-2.074.84l-1.678 1.68a2.912 2.912 0 0 0-.84 2.073c0 .79.297 1.482.84 2.075l1.678 1.679a2.91 2.91 0 0 0 2.074.84h1.975c.79 0 1.48-.297 2.073-.84l1.679-1.68c.543-.543.839-1.283.839-2.074 0-.79-.296-1.481-.84-2.074l-1.678-1.679zm-.099 4l-1.678 1.68c-.099.098-.198.148-.296.148h-1.975c-.099 0-.247-.05-.296-.149l-1.679-1.679a.544.544 0 0 1-.148-.296c0-.05 0-.198.148-.296l1.679-1.68c.098-.098.197-.148.296-.148h1.975c.098 0 .246.05.296.149l1.678 1.679a.544.544 0 0 1 .148.296c0 .05-.049.198-.148.296zm17.921 12.248a3.51 3.51 0 0 0 1.037-2.519c0-.938-.395-1.876-1.037-2.518-1.382-1.383-3.702-1.383-5.085 0a3.51 3.51 0 0 0-1.037 2.518c0 .939.395 1.877 1.037 2.52a3.592 3.592 0 0 0 2.518 1.036c.987 0 1.876-.345 2.567-1.037zm-3.653-2.519c0-.296.099-.592.345-.79.198-.197.494-.345.79-.345.297 0 .593.098.79.345a1.103 1.103 0 0 1 0 1.58 1.103 1.103 0 0 1-1.58 0 1.166 1.166 0 0 1-.345-.79zm160.251 65.734c.543 1.383 1.827 2.222 3.308 2.222h3.357a3.63 3.63 0 0 0 2.518-1.037l1.975-1.975a3.588 3.588 0 0 0 .79-3.902c-.544-1.383-1.827-2.222-3.308-2.222h-3.357a3.63 3.63 0 0 0-2.518 1.037l-1.975 1.975c-1.086 1.037-1.382 2.52-.79 3.902zm2.518-2.173l1.975-1.976c.197-.197.493-.345.79-.345h3.357c.69 0 .987.543 1.037.691.049.148.246.741-.247 1.235l-1.975 1.975a1.165 1.165 0 0 1-.79.346h-3.357c-.691 0-.987-.543-1.037-.691-.05-.198-.247-.741.247-1.235z"
						/>
					</g>
				</svg>
			</picture>
		)
	}
}
