import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const header_sx = css`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	width: ${THEME.width.full};
	height: ${THEME.height.h40};
	padding: 0 ${THEME.padding.x3};
	box-shadow: ${THEME.boxShadow.primary};
	background-color: ${THEME.color.hover_white};
	z-index: 89;
`;

export const header_btn = css`
	display: flex;
	align-items: center;
	gap: ${THEME.gap.x3};
`;

export const userMenu = css`
	&.bp5-menu {
		min-width: ${THEME.width.button};
		box-shadow: ${THEME.boxShadow.primary};
		border-radius: 4px;
		padding: 0;
	}
`;
