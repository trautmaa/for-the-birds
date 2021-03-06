import React from 'react';
import './index.css';
import { Game } from './Game';
import { Route, useLocation, Link, Switch } from 'wouter';
import { WhatTheCrud } from './Components/WhatTheCrud';
import { Sidebar } from './Components/Sidebar';
import { Homepage } from './Components/Homepage';
import './root.css';
import { FOR_THE_BIRDS_ENDPOINT } from './config';
import { Image } from './image';

export const userId = 1;

export const App = () => {
	const [ , setLocation ] = useLocation();

	return (
		<div className="root">
			<Sidebar />
			<Switch>
				<Route path="/game">
					<WhatTheCrud
						title="Pick a set of questions to play"
						url={FOR_THE_BIRDS_ENDPOINT + 'modules'}
						onSelect={(id: string) => setLocation(`/game/${id}`)}
					/>
				</Route>
				<Route path="/game/:id">{(params) => <Game moduleId={params.id} />}</Route>
				<Route path="/">
					<Homepage />
				</Route>
				<Route path="/questions">
					<WhatTheCrud title="Questions" url={FOR_THE_BIRDS_ENDPOINT + 'questions'} />
				</Route>
				<Route path="/:anything*">
					<Image />
					<div className="not-found">
						<div>Oops. Page not found.</div>
						<div>
							<Link href="/">Go home</Link>
						</div>
					</div>
				</Route>
			</Switch>
		</div>
	);
};

export default App;
