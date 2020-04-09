import React from 'react';

export const GameSelection: React.FC<{ userId?: string; url: string }> = ({ userId, url }) => {
	const [ data, setData ] = React.useState<any>([]);

	React.useEffect(
		() => {
			// Get modules for user
			fetch(url, { method: 'GET' }).then((response) => response.json()).then((data) => setData(data));
		},
		[ url ]
	);

	return <div>{JSON.stringify(data)}</div>;
};
