const getQueryString = (params: {
	status?: string;
	search?: string;
	skip?: string;
	take?: string;
}): string => {
	const query = new URLSearchParams(params);
	return '?' + query.toString();
};

export default getQueryString;
