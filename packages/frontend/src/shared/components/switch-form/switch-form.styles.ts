import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const switchBtns = css`
	@media screen and (min-width: ${THEME.media.desktop}) {
		max-width: ${THEME.sizes['1/1.5']};
	}
`;
