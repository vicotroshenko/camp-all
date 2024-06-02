import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const backdrop = css`
	position: fixed;
	top: 0;
	left: 0;
	width: ${THEME.width.full_vw};
	height: ${THEME.height.full_vh};
	background-color: transparent;
	visibility: visible;
	opacity: 1;
	z-index: 99;
`;

export const modal_show = css`
	position: absolute;
	top: ${THEME.sizes['1/2']};
	left: ${THEME.sizes['1/2']};
	transform: translate(-${THEME.sizes['1/2']}, -${THEME.sizes['1/2']});
`;

export const modal_hide = css`
	display: none;
	visibility: hidden;
	opacity: 0;
`;
