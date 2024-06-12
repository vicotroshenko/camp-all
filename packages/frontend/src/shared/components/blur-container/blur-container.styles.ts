import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const blur_wrapper = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	backdrop-filter: blur(2px);
	padding: ${THEME.padding.x3} ${THEME.padding.x3};
	border-radius: ${THEME.borderRadius.big};
	box-shadow: ${THEME.boxShadow.primary};
`;
