import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const login_form = css`
	display: flex;
	flex-direction: column;
	max-width: ${THEME.width.w280};
	gap: ${THEME.gap.x1};
	width: ${THEME.width.full};
`;

export const login_btn = css`
	display: flex;
	justify-content: space-between;
`;
