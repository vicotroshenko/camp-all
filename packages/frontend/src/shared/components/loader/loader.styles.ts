import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const loader_container = css`
	position: fixed;
	top: 0;
	left: 0;
	background-color: ${THEME.color.hover_white};
	width: ${THEME.width.full};
	height: ${THEME.height.full};
	z-index: 77;
	& > div {
		position: fixed;
		top: ${THEME.sizes['1/2']};
		left: ${THEME.sizes['1/2']};
		transform: translate(-${THEME.sizes['1/2']}, -${THEME.sizes['1/2']});
	}
`;
