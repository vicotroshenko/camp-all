import { css } from "@emotion/css";
import { THEME } from "~shared/styles/theme";

export const btn_group = css`
	margin: 0 auto ${THEME.margin.x5} auto;
	@media screen and (min-width: ${THEME.media.desktop}){
		margin: 0 auto ${THEME.margin.x5} 0;
	}
`

export const btn_group_item = css`
		& * {
			pointer-events: none;
		}
	`;