import React from 'react';
import gsap from 'gsap';
import { animateToVisible } from './Animations';
import { getClassNameFromNumber } from '../Helpers/Helpers';
import { Image } from '../image';

export interface SVGRenderProps {
	currentStep: number;
}

/**
 * Takes a current step and renders all the elements with classnames from
 * previous steps. So if current step is 3, renders elements 1 and 2
 * @param currentStep Current step is a number for the current step
 */
export class SVGRender extends React.Component<SVGRenderProps> {
	constructor(props: SVGRenderProps) {
		super(props);
		initToStep(props.currentStep);
	}

	componentDidUpdate(prevProps: SVGRenderProps) {
		const { currentStep } = this.props;
		const justIncremented = prevProps.currentStep + 1 === currentStep;
		if (justIncremented) {
			// Todo
			// Maybe here we need to call depending on how many questions there are, so we don't run
			// out of SVG to animate
			console.log('updating/');
			animateToVisible(currentStep);
		}
	}

	render() {
		return (
			<React.Fragment>
				<Image />
			</React.Fragment>
		);
	}
}

export const initToStep = (currentStep: number) => {
	for (let i = 0; i < currentStep; i++) {
		const currentStepClassName = getClassNameFromNumber(i);
		gsap.to(currentStepClassName, { autoAlpha: 1, duration: 0 });
	}
};
