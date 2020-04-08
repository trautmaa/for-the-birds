import React from 'react';

export interface ProgressProps {
	numerator?: number;
	denominator?: number;
}

export const Progress: React.FC<ProgressProps> = ({ numerator, denominator }) => {
	return (
		<div className="progress-wrapper">
			{numerator} / {denominator}
		</div>
	);
};
