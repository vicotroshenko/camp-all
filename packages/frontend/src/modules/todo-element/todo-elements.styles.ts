import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const element_wrapper = css`
	width: ${THEME.width.full};
	background-color: ${THEME.color.hover_white};
	backdrop-filter: blur(2px);
	padding: ${THEME.padding.x3} ${THEME.padding.x2};
	border-radius: ${THEME.borderRadius.big};
	box-shadow: ${THEME.boxShadow.secondary};
`;

export const el_buttons = css`
	display: flex;
	align-items: center;
	gap: ${THEME.gap.x3};
`;

export const element_title = css`
	letter-spacing: ${THEME.letterSpacing.big};
	margin-right: ${THEME.margin.x1};
	font-weight: 400;
	font-size: 16px;
`;
