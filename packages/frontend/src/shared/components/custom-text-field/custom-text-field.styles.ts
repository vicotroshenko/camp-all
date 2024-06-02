import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const ct_field_container = css`
	margin: 0 auto ${THEME.margin.x2} auto;
	@media screen and (min-width: ${THEME.media.desktop}) {
		margin: 0 0 ${THEME.margin.x2} auto;
	}
`;

export const ct_field = css`
	width: ${THEME.width.w280};
	height: ${THEME.height.h32};
	box-shadow: ${THEME.boxShadow.primary};
	border-radius: ${THEME.borderRadius.medium};
	padding: 0 ${THEME.padding.x2};
`;
