import React from 'react';
import './App.css';
import { Input } from './Partials/Input';
import { SVGRender } from './Partials/SVGRender';
import { Question } from './Types';
import { Progress } from './Partials/Progress';
import { addClassNamesToSVG } from './Helpers/Helpers';
import { getAll } from './Helpers/Service';
import { FOR_THE_BIRDS_ENDPOINT } from './config';

export const Game: React.FC<{ moduleId?: string }> = ({ moduleId }) => {
	const [ currentStep, setCurrentStep ] = React.useState(0);
	const [ questions, setQuestions ] = React.useState<Question[]>([]);
	const numerator = currentStep;
	const denominator = questions.length;
	const moduleInProgress = numerator !== denominator;

	const increment = () => {
		const nextStep = currentStep + 1;
		setCurrentStep(nextStep);
	};

	React.useEffect(() => {
		// Get questions
		getAll(FOR_THE_BIRDS_ENDPOINT + 'questions').then((data) => setQuestions(data));

		// Setup SVG with classNames
		addClassNamesToSVG();
	}, []);

	return (
		<div className="App">
			<SVGRender currentStep={currentStep} />
			<div className="game-contents">
				<Progress numerator={numerator} denominator={denominator} />
				{(moduleInProgress && <Input action={increment} question={questions[currentStep]} />) || (
					<div>Congratulations, you finished</div>
				)}
				<div className="skip-question">{moduleInProgress && <button onClick={increment}>Skip</button>}</div>
				<a className="attribution-link" href="https://www.vecteezy.com/free-vector/landscape">
					Landscape Vectors by Vecteezy
				</a>
			</div>
		</div>
	);
};
