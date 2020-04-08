import React from 'react';
import './App.css';
import { Input } from './Partials/Input';
import { SVGRender } from './Partials/SVGRender';
import { Question } from './Types';
import { Progress } from './Partials/Progress';
import { addClassNamesToSVG } from './Helpers/Helpers';

function App() {
	const [ currentStep, setCurrentStep ] = React.useState(0);
	const [ questions, setQuestions ] = React.useState<Question[]>([]);

	const increment = () => {
		const nextStep = currentStep + 1;
		setCurrentStep(nextStep);
	};

	// Setup SVG with classNames
	React.useEffect(() => {
		addClassNamesToSVG();
	}, []);

	React.useEffect(() => {
		fetch('http://localhost:4000/questions')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setQuestions((data as unknown) as Question[]);
			});
	}, []);

	return (
		<div className="App">
			<div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
				<h4>Current step: {currentStep}</h4>
				<button onClick={increment}>Increment</button>
			</div>
			<SVGRender currentStep={currentStep} />
			<Input action={increment} question={questions[currentStep]} />
			<Progress numerator={currentStep} denominator={questions.length} />
			<a href="https://www.vecteezy.com/free-vector/landscape">Landscape Vectors by Vecteezy</a>
		</div>
	);
}

export default App;
