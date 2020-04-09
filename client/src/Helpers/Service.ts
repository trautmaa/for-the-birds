export const getAll = async (url: string) => {
	return fetch(url, { method: 'GET' }).then((response) => response.json()).then((data) => data);
};
