import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const contents_container = css`
	margin-bottom: ${THEME.margin.x3};
`;

export const contents = css`
	& > span:first-child {
		display: block;
		margin-bottom: ${THEME.margin.x2};
		text-transform: capitalize;
		font-size: ${THEME.fontSize.big};
		font-weight: 500;
		letter-spacing: ${THEME.letterSpacing.big};
	}

	& > div {
		max-height: ${THEME.sizes['1/2']};
		overflow-y: auto;
		background-color: ${THEME.color.white};
		border-radius: ${THEME.borderRadius.medium};
		box-shadow: ${THEME.boxShadow.primary};
		padding: ${THEME.padding.x2};
		line-height: ${THEME.lineHeight.big};
	}
`;
