import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PortalProvider } from '@blueprintjs/core';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/router';
import { ROUTER_KEYS } from '~shared/keys';
import './shared/styles/global-styles.css';
import '@blueprintjs/core/lib/css/blueprint.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<PortalProvider portalClassName="my-custom-class">
		<BrowserRouter basename={ROUTER_KEYS.BASE_NAME}>
			<Router />
		</BrowserRouter>
	</PortalProvider>,
);
