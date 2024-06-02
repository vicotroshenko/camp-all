import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const fieldStyle = css`
	box-shadow: ${THEME.boxShadow.primary};
	border-radius: ${THEME.borderRadius.small};
	height: ${THEME.height.h32};
	width: ${THEME.width.full};
	padding: 0 ${THEME.padding.x2};
`;
