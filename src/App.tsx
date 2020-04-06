import React from 'react';
import './App.css';
import { Input } from './Partials/Input';
import { Image } from './image';
import { getRandomFromArray } from './Helpers/Helpers';
import gsap from 'gsap';

const CLASS_NAME = 'animation-target';
const transformOrigin = '50% 50%';
const scaleMax = 7;
const scaleMin = 3;

function App() {
	const onClick = () => {
		const items = (document.getElementsByClassName(CLASS_NAME) as unknown) as SVGElement[];
		const randomItems = getRandomFromArray(items);

		const scale = Math.floor(Math.random() * (scaleMax - scaleMin) + scaleMin);

		var tl = gsap.timeline({ yoyo: true });
		tl.to(randomItems, {
			duration: 1,
			rotation: 360,
			transformOrigin,
			scaleY: scale,
			scaleX: scale,
			autoAlpha: 1,
			ease: 'circ.inOut'
		});
		tl.to(randomItems, {
			duration: 1,
			rotation: 720,
			transformOrigin,
			scaleY: 1,
			scaleX: 1,
			autoAlpha: 1,
			ease: 'circ.inOut'
		});
	};

	return (
		<div className="App">
			<Image />
			<Input action={onClick} />
			<a href="https://www.vecteezy.com/free-vector/landscape">Landscape Vectors by Vecteezy</a>
		</div>
	);
}

export default App;
