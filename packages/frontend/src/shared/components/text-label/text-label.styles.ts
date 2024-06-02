import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const sw = css`
	text-transform: capitalize;
	font-weight: 500;
`;

export const error_text = css`
	display: inline-block;
	color: ${THEME.color.red};
	text-transform: lowercase;
	font-size: ${THEME.fontSize.small};
	line-height: ${THEME.lineHeight.small};
`;
