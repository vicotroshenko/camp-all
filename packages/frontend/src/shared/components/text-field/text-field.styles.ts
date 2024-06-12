import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const fieldStyle = css`
	box-shadow: ${THEME.boxShadow.primary};
	border-radius: ${THEME.borderRadius.small};
	height: ${THEME.height.h32};
	width: ${THEME.width.full};
	padding: 0 ${THEME.padding.x2};
	font-size: ${THEME.fontSize.medium};
	letter-spacing: ${THEME.letterSpacing.small};
	background: transparent;
	transition: all 0.35s linear;

	&:not(:placeholder-shown) {
		background-color: ${THEME.color.white};
	}
	&:hover {
		border: 1px solid black;
	}
	&:focus {
		border: 1px solid black;
		background-color: ${THEME.color.white};
	}
`;
