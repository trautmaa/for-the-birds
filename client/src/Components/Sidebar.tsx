import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'wouter';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
	return (
		<Menu>
			<Link className="menu-item" href="/">
				Home
			</Link>
			<Link className="menu-item" href="/questions">
				Questions
			</Link>
			<Link className="menu-item" href="/game">
				Game
			</Link>
		</Menu>
	);
};
