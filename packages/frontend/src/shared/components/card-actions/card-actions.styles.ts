import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const btn_wrapper = css`
	display: flex;
	gap: ${THEME.gap.x3};
	width: ${THEME.width.full};

	& > div:last-child {
		margin-left: auto;
	}
`;
