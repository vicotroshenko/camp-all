import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const contents = css`
	& > span:first-child {
		display: block;
		margin-bottom: ${THEME.margin.x3};
		text-transform: capitalize;
		font-size: ${THEME.fontSize.big};
		font-weight: 500;
	}

	& > span:last-child {
		display: block;
		max-height: ${THEME.sizes['1/2']};
		overflow-y: auto;
	}
`;
