import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const loginTitle = css`
	font-size: ${THEME.fontSize.large};
	margin-bottom: ${THEME.margin.x4};

	@media screen and (min-width: ${THEME.media.desktop}) {
		margin-bottom: ${THEME.margin.x7};
	}
`;

export const todoTitle = css`
	font-family: ${THEME.fonts.title_primary};
	font-size: ${THEME.fontSize.large};
	margin-bottom: ${THEME.margin.x4};

	@media screen and (min-width: ${THEME.media.desktop}) {
		margin-bottom: ${THEME.margin.x7};
	}
`;
