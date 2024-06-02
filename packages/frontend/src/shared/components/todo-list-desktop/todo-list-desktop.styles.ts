import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const todo_tb = css`
	background-color: ${THEME.color.white};
	display: none;

	@media screen and (min-width: ${THEME.media.desktop}) {
		display: table;
	}
`;

export const border_tb = css`
	border: 1px solid ${THEME.color.black};
	border-collapse: collapse;

	& > tr:nth-child(even) {
		background-color: ${THEME.color.hover_gray};
	}

	& > td {
		border: 1px solid black;
		border-collapse: collapse;
		padding: 0 ${THEME.padding.x2};
	}
	& > td:first-child {
		vertical-align: baseline;
		text-align: center;
	}
	& > th {
		border: 1px solid ${THEME.color.black};
		border-collapse: collapse;
		background-color: ${THEME.color.hover_gray};
		text-transform: capitalize;
		font-size: ${THEME.fontSize.big};
	}
`;

export const paginate_container = css`
	display: flex;
	gap: ${THEME.gap.x2};
	padding-top: ${THEME.padding.x5};
	margin-top: auto;
	& > li {
		background-color: ${THEME.color.hover_gray};
		border-radius: ${THEME.borderRadius.medium};
		overflow: hidden;
		font-weight: 500;
	}

	& li:not(.selected) {
		background-color: ${THEME.color.white};
		font-weight: 400;
	}

	& a {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: ${THEME.padding.x2} ${THEME.padding.x4};
		color: ${THEME.color.black};
		box-shadow: ${THEME.boxShadow.primary};
		border-radius: ${THEME.borderRadius.medium};
		cursor: pointer;
		transition: all 0.25s linear;
	}

	& a:active {
		color: ${THEME.color.red};
	}
`;
