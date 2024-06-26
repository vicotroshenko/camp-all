import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const card_item = css`
	width: ${THEME.width.full};
	min-width: ${THEME.width.w280};
	max-width: ${THEME.width.todoCard};
	margin: ${THEME.margin.x3} auto ${THEME.margin.x3} auto;
`;
