import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const outerSection = css`
	width: ${THEME.width.full};
	height: ${THEME.height.full};
`;

export const innerContainer = css`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: stretch;
	width: ${THEME.width.full};

	padding-top: ${THEME.padding.x12};
	padding-right: ${THEME.padding.x3};
	padding-left: ${THEME.padding.x3};
	padding-bottom: ${THEME.padding.x3};

	max-width: ${THEME.width.screen_max};

	@media screen and (min-width: ${THEME.media.tablet}) {
		padding: ${THEME.padding.x12} ${THEME.padding.x5};
	}

	@media screen and (min-width: ${THEME.media.desktop}) {
		padding: ${THEME.padding.x12} ${THEME.padding.x8};
	}
`;
