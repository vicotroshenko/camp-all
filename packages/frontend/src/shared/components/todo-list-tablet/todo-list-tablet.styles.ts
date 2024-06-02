import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const td_ls_mobile = css`
	display: flex;
	flex-direction: column;
	gap: ${THEME.fontSize.big};
	align-items: center;
	justify-content: center;

	@media screen and (min-width: ${THEME.media.desktop}) {
		display: none;
	}
`;

export const sliderContainer = css`
	max-width: ${THEME.width.full};
`;

export const slider_el = css`
	display: flex;
	justify-content: center;
`;

