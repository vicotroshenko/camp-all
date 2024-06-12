import { useMemo } from 'react';
import { SetURLSearchParams, useSearchParams } from 'react-router-dom';

const useAppSearchParams = (): [
	{ [x: string]: string },
	SetURLSearchParams,
] => {
	const [searchParams, setSearchParams] = useSearchParams();
	const params = useMemo(
		() => Object.fromEntries([...searchParams]),
		[searchParams],
	);

	return [params, setSearchParams];
};

export default useAppSearchParams;
