import React from 'react';
import './Homepage.css';
import { addClassNamesToSVG, animateRandomOnClick } from '../Helpers/Helpers';
import { Image } from '../image';

export const Homepage: React.FC = () => {
	React.useEffect(() => {
		// Setup SVG with classNames
		addClassNamesToSVG(true);

		const interval = setInterval(() => {
			animateRandomOnClick();
		}, 200);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="homepage">
			<h1>For the Birds</h1>
			<Image />
		</div>
	);
};
