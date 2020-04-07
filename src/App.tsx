import React from 'react';
import './App.css';
import { Input } from './Partials/Input';
import { SVGRender } from './Partials/SVGRender';
import { Question } from './Types';
import { Progress } from './Partials/Progress';

function App() {
	const [ currentStep, setCurrentStep ] = React.useState(0);
	const [ questions, setQuestions ] = React.useState<Question[]>([]);

	const increment = () => {
		const nextStep = currentStep + 1;
		setCurrentStep(nextStep);
	};

	React.useEffect(() => {
		fetch('http://localhost:4000/questions')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setQuestions((data as unknown) as Question[]);
			});
	}, []);

	console.log('qq: ', questions);

	return (
		<div className="App">
			<h4 style={{ position: 'absolute' }}>Current step: {currentStep}</h4>
			<button style={{ position: 'absolute' }} onClick={increment}>
				Increment
			</button>
			<SVGRender currentStep={currentStep} />
			<Input action={increment} question={questions[currentStep]} />
			<Progress numerator={currentStep} denominator={questions.length} />
			<a href="https://www.vecteezy.com/free-vector/landscape">Landscape Vectors by Vecteezy</a>
		</div>
	);
}

export default App;
