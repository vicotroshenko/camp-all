import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const todoTitle = css`
	font-size: ${THEME.fontSize.large};
	margin-bottom: ${THEME.margin.x4};

	@media screen and (min-width: ${THEME.media.desktop}) {
		margin-bottom: ${THEME.margin.x7};
	}
`;
