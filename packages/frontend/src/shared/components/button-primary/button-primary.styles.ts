import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const btnPrimary = css`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${THEME.gap.x2};
	width: ${THEME.width.button};
	height: ${THEME.height.h32};
	padding: 0 ${THEME.padding.x1};
	border: none;
	text-transform: capitalize;
	font-family:
		system-ui,
		-apple-system,
		BlinkMacSystemFont,
		sans-serif;
	font-weight: 500;
	border-radius: ${THEME.borderRadius.small};
	letter-spacing: ${THEME.letterSpacing.small};
	background-color: ${THEME.color.button_back};
	color: ${THEME.color.gray};
	box-shadow: ${THEME.boxShadow.secondary};
	transition: all 0.25s linear;
	cursor: pointer;

	&:hover {
		background-color: ${THEME.color.button_hover};
	}

	&:focus {
		background-color: ${THEME.color.button_hover};
	}
	&:disabled {
		background-color: ${THEME.color.button_disabled};
		cursor: not-allowed;
	}
`;
