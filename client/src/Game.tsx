import React from 'react';
import './App.css';
import { Input } from './Partials/Input';
import { SVGRender } from './Partials/SVGRender';
import { Question } from './Types';
import { Progress } from './Partials/Progress';
import { addClassNamesToSVG } from './Helpers/Helpers';
import { getAll } from './Helpers/Service';
import { backendUrl } from './App';

export const Game: React.FC<{ moduleId?: string }> = ({ moduleId }) => {
	const [ currentStep, setCurrentStep ] = React.useState(0);
	const [ questions, setQuestions ] = React.useState<Question[]>([]);

	const increment = () => {
		const nextStep = currentStep + 1;
		setCurrentStep(nextStep);
	};

	React.useEffect(() => {
		// Get questions
		getAll(backendUrl + 'questions').then((data) => setQuestions(data));

		// Setup SVG with classNames
		addClassNamesToSVG();
	}, []);

	return (
		<div className="App">
			<SVGRender currentStep={currentStep} />
			<div className="game-contents">
				<Progress numerator={currentStep} denominator={questions.length} />
				<Input action={increment} question={questions[currentStep]} />
				<div>
					<button onClick={increment}>Skip question</button>
				</div>
				<a className="attribution-link" href="https://www.vecteezy.com/free-vector/landscape">
					Landscape Vectors by Vecteezy
				</a>
			</div>
		</div>
	);
};
