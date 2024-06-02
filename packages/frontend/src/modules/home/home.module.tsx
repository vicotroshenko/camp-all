import React from 'react';
import { Divider } from '@blueprintjs/core';
import { ROUTER_KEYS } from '~shared/keys';
import Container from '~shared/components/container/container.component';
import LinkPrimary from '~shared/components/link-primary/link-primary.component';
import TodoTitle from '~shared/components/todo-title/todo-title.component';

const Home = () => {
	return (
		<Container>
			<TodoTitle>Welcome</TodoTitle>
			<LinkPrimary link={ROUTER_KEYS.REGISTER}>Register</LinkPrimary>
			<Divider />
			<LinkPrimary link={ROUTER_KEYS.LOGIN}>LogIn</LinkPrimary>
		</Container>
	);
};

export default Home;
