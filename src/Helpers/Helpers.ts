// import { parseSVG, MoveToCommand } from 'svg-path-parser';

// export const getCenter = (domNode: Element) => {
// 	const attr = domNode.getAttribute('d');
// 	if (!attr) return;
// 	const parsed = parseSVG(attr);
// 	const moveTo = parsed.find((item) => item.code === 'M') as MoveToCommand;
// 	if (!moveTo) return;
// 	return { x: moveTo.x, y: moveTo.y };
// };

// export const getRoot = () => {
// 	const roots = document.getElementsByTagName('svg');
// 	return roots[0];
// };

// export const getDimensions = () => {
// 	const svg = getRoot();

// 	if (!svg) return;
// 	const viewBox = svg.getAttribute('viewBox');
// 	if (!viewBox) return;

// 	const viewBoxArray = viewBox.split(' ');
// 	const x1 = viewBoxArray[1];
// 	const x2 = viewBoxArray[2];
// 	const y1 = viewBoxArray[0];
// 	const y2 = viewBoxArray[3];
// 	if (!x1 || !x2 || !y1 || !y2) return;

// 	return {
// 		height: Number(y2) - Number(y1),
// 		width: Number(x2) - Number(x1)
// 	};
// };

// export const decorateElements = (animation: string, className: string) => {
// 	const dimensions = getDimensions();
// 	const items = (document.getElementsByClassName(className) as unknown) as SVGElement[];

// 	if (!dimensions) {
// 		console.error('Could not identify svg viewbox dimensions');
// 		return;
// 	}
// 	for (var i = 0; i < items.length; i++) {
// 		decorateElement(items[i], animation);
// 	}
// };

// export const decorateElement = (element: SVGElement, animation: string) => {
// 	const dimensions = getDimensions();
// 	if (!dimensions) return;

// 	const center = getCenter(element);
// 	if (!center) return;

// 	element.style.animation = animation;

// 	const percentX = center.x / dimensions.width * 100;
// 	const percentY = center.y / dimensions.height * 100;
// 	const transformOrigin = `${percentX}% ${percentY}%`;
// 	element.style.transformOrigin = transformOrigin;
// };

// export const triggerRandom = (animation: string, items: SVGElement[], className: string) => {
// 	console.log('triggered');
// 	const dimensions = getDimensions();

// 	if (!dimensions) {
// 		console.error('Could not identify svg viewbox dimensions');
// 		return;
// 	}
// 	const randomElement = getRandomFromArray(items);
// 	console.log('triggerRandom -> randomElement', randomElement);

// 	randomElement.classList.remove(className);
// 	void randomElement.clientHeight;
// 	randomElement.classList.add(className);
// };

export const getRandomFromArray = <T>(array: T[], count: number = 1) => {
	let randoms: number[] = [];
	for (var i = 0; i < count; i++) {
		const randomIndex = Math.floor(Math.random() * array.length);
		randoms.push(randomIndex);
	}

	return randoms.map((index) => array[index]);
};
