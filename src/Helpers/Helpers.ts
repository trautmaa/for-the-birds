import gsap from 'gsap';

export const getRandomFromArray = <T>(array: T[], count: number = 1) => {
	let randoms: number[] = [];
	for (var i = 0; i < count; i++) {
		const randomIndex = Math.floor(Math.random() * array.length);
		randoms.push(randomIndex);
	}

	return randoms.map((index) => array[index]);
};

export const getClassNameFromNumber = (value: number) => {
	var s = '000000000' + value;
	return '._' + s.substr(s.length - 4);
};

const CLASS_NAME = 'animation-target';
const transformOrigin = '50% 50%';
const scaleMax = 7;
const scaleMin = 3;
export const animateRandomOnClick = () => {
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
