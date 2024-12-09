export type Method = 'GET' | 'POST' | 'DELETE' | 'PUT';

export type Params = Record<string, string | boolean | number>;

const BASE_URL = 'https://rickandmortyapi.com/api';

const objectToQueryParameters = (obj: Params): string => {
	return Object.entries(obj)
		.map(
			([key, value]) =>
				encodeURIComponent(key) + '=' + encodeURIComponent(String(value))
		)
		.join('&');
};

export const configuredApi = async <T>(
	url: string,
	method?: Method,
	params?: Params,
	timeout = 20000
): Promise<T> => {
	const options: RequestInit = {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		signal: AbortSignal.timeout(timeout),
	};
	if (params) {
		if (method === 'GET') {
			url += '?' + objectToQueryParameters(params);
		} else {
			options.body = JSON.stringify(params);
		}
	}

	const response = await fetch(BASE_URL + url, options);
	const result = (await response.json()) as T;
	return result;
};
