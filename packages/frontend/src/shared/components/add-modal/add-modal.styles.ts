import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const md_container = css`
	display: flex;
	align-items: center;
	width: ${THEME.width.full_vw};
	height: ${THEME.height.full_vh};
	background-color: white;
	padding: ${THEME.padding.x5};
	border-radius: ${THEME.borderRadius.small};
	box-shadow: ${THEME.boxShadow.primary};

	@media screen and (min-width: 768px) {
		width: ${THEME.width.modal};
		height: ${THEME.height.modal};
	}
`;

export const md_form = css`
	display: flex;
	flex-direction: column;
	gap: ${THEME.gap.x3};
	width: ${THEME.width.full};
`;

export const md_title = css`
	text-transform: capitalize;
	text-align: center;
`;

export const md_btn = css`
	display: flex;
	justify-content: space-between;
	gap: ${THEME.gap.x3};
`;
