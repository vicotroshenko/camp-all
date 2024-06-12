import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const linkPrimary = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${THEME.width.full};
	height: ${THEME.height.h32};
	background-color: ${THEME.color.button_back};
	box-shadow: ${THEME.boxShadow.secondary};
	border-radius: ${THEME.borderRadius.small};
	font-size: ${THEME.fontSize.medium};
	font-weight: 500;
	color: ${THEME.color.gray};
	text-transform: capitalize;
	letter-spacing: ${THEME.letterSpacing.small};
	transition: all 0.25s linear;

	&:hover {
		background-color: ${THEME.color.button_hover};
		text-decoration: none;
		color: ${THEME.color.gray};
	}

	&:focus {
		background-color: ${THEME.color.button_hover};
		text-decoration: none;
		color: ${THEME.color.gray};
	}

	@media screen and (min-width: ${THEME.media.desktop}) {
		max-width: ${THEME.width.w160};
	}
`;
