import gsap from 'gsap';
import { getClassNameFromNumber } from '../Helpers/Helpers';

export const inputLocation = {
	y: 900,
	x: 1400
};
export const animationToVisible = {
	autoAlpha: 1
};
export const createElementAnimation = {
	// cx: inputLocation.x,
	// cy: inputLocation.y,
	transform: 'translateY(1500px)',
	ease: 'circ.inOut'
};

export const animateToVisible = (step: number) => {
	const updatedClassName = getClassNameFromNumber(step);
	const targets = document.getElementsByClassName(updatedClassName);
	const target = targets[0];
	const tl = gsap.timeline();
	tl.from(target, createElementAnimation, 0);
	tl.to(target, animationToVisible, 0);
	// tl.to(
	// 	updatedClassName,
	// 	{
	// 		duration: 2,
	// 		// rotation: 360,
	// 		scaleY: 3,
	// 		scaleX: 3,
	// 		autoAlpha: 1,
	// 		ease: 'circ.inOut'
	// 	},
	// 	0
	// );
	// tl.to(updatedClassName, {
	// 	duration: 2,
	// 	// rotation: 720,
	// 	scaleY: 1,
	// 	scaleX: 1,
	// 	autoAlpha: 1,
	// 	ease: 'circ.inOut'
	// });
};
