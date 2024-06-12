import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const item_container = css`
	display: flex;
	width: ${THEME.width.full};
	min-height: ${THEME.height.h32};
	max-height: ${THEME.height.h64};
	box-shadow: ${THEME.boxShadow.secondary};
	background-color: ${THEME.color.hover_white};
	font-weight: 500;
	& > li {
		box-shadow: ${THEME.boxShadow.primary};
	}

	& > li:first-child {
		width: 15%;
	}
	& > li:nth-child(2) {
		width: 15%;
	}
	& > li:nth-child(3) {
		width: calc(70% - 30px);
	}
	& > li:last-child {
		width: 30px;
	}
`;

export const item_container_head = css`
	& > li {
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: ${THEME.boxShadow.primary};
		background-color: ${THEME.color.button_back};
		color: ${THEME.color.gray};
		font-weight: 600;
		letter-spacing: ${THEME.letterSpacing.big};
	}
`;

export const completed = css`
	& > li:not(:last-child) {
		filter: invert(70%);
	}
`;

export const guest = css`
	& > li:not(:last-child) {
		filter: blur(2px);
	}
`;

export const ds_item_link = css`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: ${THEME.width.full};
	height: ${THEME.height.full};
	padding: 0 ${THEME.padding.x1};
	color: inherit;
	cursor: pointer;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	&:hover {
		color: inherit;
		text-decoration: none;
	}
`;
