import React from 'react';
import './App.css';
import { Input } from './Partials/Input';
import { SVGRender } from './Partials/SVGRender';
import { animateRandomOnClick } from './Helpers/Helpers';

function App() {
	const [ currentStep, setCurrentStep ] = React.useState(0);

	const increment = () => {
		const nextStep = currentStep + 1;
		setCurrentStep(nextStep);
	};

	return (
		<div className="App">
			<h4 style={{ position: 'absolute' }}>Current step: {currentStep}</h4>
			<button style={{ position: 'absolute' }} onClick={increment}>
				Increment
			</button>
			<SVGRender currentStep={currentStep} />
			<Input action={animateRandomOnClick} />
			<a href="https://www.vecteezy.com/free-vector/landscape">Landscape Vectors by Vecteezy</a>
		</div>
	);
}

export default App;
