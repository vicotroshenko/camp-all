import { css } from '@emotion/css';
import { THEME } from '~shared/styles/theme';

export const ld_item_animate = css`
	opacity: 0;
`;

export const ld_item = css`
	width: 100%;
	backdrop-filter: blur(2px);
	& > li:not(:first-child) {
		opacity: 1;
		animation: goLeftToRight 0.25s linear;
	}
	@keyframes goLeftToRight {
		0% {
			opacity: 0;
			transform: translateY(16px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

export const paginate_container = css`
	display: flex;
	gap: ${THEME.gap.x2};
	padding-top: ${THEME.padding.x5};
	margin-top: auto;
	& > li {
		background-color: ${THEME.color.button_disabled};
		border-radius: ${THEME.borderRadius.small};
		overflow: hidden;
		font-weight: 500;
		text-transform: uppercase;
		transition: all 0.25s linear;
	}

	& li:not(.selected) {
		background-color: ${THEME.color.button_back};
		font-weight: 400;
	}
	& > li:hover {
		background-color: ${THEME.color.button_hover};
		& a {
			color: ${THEME.color.gray};
		}
	}
	& > li:focus {
		background-color: ${THEME.color.button_hover};
		& a {
			color: ${THEME.color.gray};
		}
	}

	& a {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: ${THEME.padding.x2} ${THEME.padding.x4};
		color: ${THEME.color.gray};
		box-shadow: ${THEME.boxShadow.primary};
		border-radius: ${THEME.borderRadius.medium};
		cursor: pointer;
		transition: all 0.25s linear;
	}

	& a:active {
		color: ${THEME.color.red};
	}
`;
