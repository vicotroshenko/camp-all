import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const linkPrimary = css`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${THEME.width.full};
	height: ${THEME.height.h32};
	background-color: ${THEME.color.white};
	box-shadow: ${THEME.boxShadow.primary};
	border-radius: ${THEME.borderRadius.small};
	font-size: ${THEME.fontSize.medium};
	font-weight: 500;
	color: ${THEME.color.black};
	text-transform: capitalize;
	letter-spacing: ${THEME.letterSpacing.small};
	transition: all 0.25s linear;

	&:hover {
		background-color: ${THEME.color.hover_gray};
		color: inherit;
		text-decoration: none;
	}

	&:focus {
		background-color: ${THEME.color.hover_gray};
		color: inherit;
		text-decoration: none;
	}

	@media screen and (min-width: ${THEME.media.desktop}) {
		max-width: ${THEME.width.w160};
	}
`;
