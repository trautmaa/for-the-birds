// import gsap from 'gsap';
import { Question } from '../Types';

// export const getRandomFromArray = <T>(array: T[], count: number = 1) => {
// 	let randoms: number[] = [];
// 	for (var i = 0; i < count; i++) {
// 		const randomIndex = Math.floor(Math.random() * array.length);
// 		randoms.push(randomIndex);
// 	}

// 	return randoms.map((index) => array[index]);
// };

export const getClassNameFromNumber = (value: number) => {
	var s = '000000000' + value;
	return '._' + s.substr(s.length - 4);
};

// const CLASS_NAME = 'animation-target';
// const transformOrigin = '50% 50%';
// const scaleMax = 7;
// const scaleMin = 3;
// export const animateRandomOnClick = () => {
// 	const items = (document.getElementsByClassName(CLASS_NAME) as unknown) as SVGElement[];
// 	const randomItems = getRandomFromArray(items);

// 	const scale = Math.floor(Math.random() * (scaleMax - scaleMin) + scaleMin);

// 	var tl = gsap.timeline({ yoyo: true });
// 	tl.to(randomItems, {
// 		duration: 1,
// 		rotation: 360,
// 		transformOrigin,
// 		scaleY: scale,
// 		scaleX: scale,
// 		autoAlpha: 1,
// 		ease: 'circ.inOut'
// 	});
// 	tl.to(randomItems, {
// 		duration: 1,
// 		rotation: 720,
// 		transformOrigin,
// 		scaleY: 1,
// 		scaleX: 1,
// 		autoAlpha: 1,
// 		ease: 'circ.inOut'
// 	});
// };

export const isCorrect = (inputAnswer: string | number, question?: Question) => {
	if (!question) return false;
	const { answer } = question;
	return answer === inputAnswer || answer == inputAnswer || answer.toString() === inputAnswer.toString();
};

export const addClassNamesToSVG = () => {
	const groups = getElementsByTagWithoutChildren('g');
	console.log('addClassNamesToSVG -> groups', groups);
	let group, label;
	for (var i = 0; i < groups.length; i++) {
		group = groups[i];
		label = i + 1;
		const className = getClassNameFromNumber(label);
		console.log('addClassNamesToSVG -> className', className);
		group.classList.add(className);

		// @ts-ignore
		group.style.visibility = 'hidden';
	}
};

// Get all of group that don't contain another of that same group
export const getElementsByTagWithoutChildren = (tagName: string) => {
	const groups = document.getElementsByTagName(tagName);
	let group;
	let returnArray = [];
	for (var i = 0; i < groups.length; i++) {
		group = groups[i];
		let containsAny = false;
		for (var j = 0; j < groups.length; j++) {
			const otherG = groups[j];
			if (group.contains(otherG) && i !== j) {
				containsAny = true;
			}
		}
		if (!containsAny) {
			returnArray.push(group);
		}
	}
	return returnArray;
};
