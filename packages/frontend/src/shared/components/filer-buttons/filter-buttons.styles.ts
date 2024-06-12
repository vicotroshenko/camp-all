import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const btn_group = css`
	margin: 0 auto ${THEME.margin.x5} auto;
	& .bp5-button {
		background-color: ${THEME.color.button_back} !important;
		color: ${THEME.color.gray} !important;
		&:disabled {
			background-color: ${THEME.color.button_disabled} !important;
		}
	}
	@media screen and (min-width: ${THEME.media.desktop}) {
		margin: 0 auto ${THEME.margin.x5} 0;
	}
`;

export const btn_group_item = css`
	& * {
		pointer-events: none;
	}
`;
