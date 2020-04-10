import React from 'react';
import './index.css';
import { Game } from './Game';
import { Route, useLocation } from 'wouter';
import { WhatTheCrud } from './Components/WhatTheCrud';
import { Sidebar } from './Components/Sidebar';
import { Homepage } from './Components/Homepage';
import './root.css';
import { FOR_THE_BIRDS_ENDPOINT } from './config';

export const userId = 1;

export const App = () => {
	const [ , setLocation ] = useLocation();

	return (
		<div className="root">
			<Sidebar />
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
		</div>
	);
};

export default App;
