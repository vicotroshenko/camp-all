import React from 'react';
import { Link } from 'react-router-dom';
import { linkPrimary } from './link-primary.styles';

interface LinkPrimaryProps {
	children: React.ReactNode;
	link: string;
}

const LinkPrimary: React.FC<LinkPrimaryProps> = ({ children, link }) => {
	return (
		<Link to={link} className={linkPrimary}>
			{children}
		</Link>
	);
};

export default LinkPrimary;
