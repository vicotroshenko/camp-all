import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const ds_action_wrapper = css`
	position: relative;
`;

export const showUp_container = css`
	position: absolute;
	top: 0;
	display: none;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	right: 0;
	background-color: ${THEME.color.white};
	padding: ${THEME.padding.x2};
	box-shadow: ${THEME.boxShadow.secondary};
	border-radius: ${THEME.borderRadius.medium};
	opacity: 0;
	animation: showOff 0.25s linear;

	@keyframes showOff {
		0% {
			display: flex;
			top: 100%;
			opacity: 1;
		}
		100% {
			display: none;
			top: 0;
			opacity: 0;
		}
	}
`;

export const showUp_active = css`
	display: flex;
	top: 100%;
	animation: showUp 0.25s linear;
	opacity: 1;
	z-index: 177;

	@keyframes showUp {
		0% {
			display: none;
			top: 0;
			opacity: 0;
		}
		100% {
			display: flex;
			top: 100%;
			opacity: 1;
		}
	}
`;
