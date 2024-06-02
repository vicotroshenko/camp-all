import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const textarea_desc = css`
	resize: none;
	display: block;
	width: ${THEME.width.full};
	box-shadow: ${THEME.boxShadow.primary};
	border-radius: ${THEME.borderRadius.small};
	min-height: ${THEME.height.h200};
	width: ${THEME.width.full};
	padding: ${THEME.padding.x2};
	outline: none;
	border: none;
	font-size: ${THEME.fontSize.medium};
	line-height: ${THEME.lineHeight.medium};
`;
