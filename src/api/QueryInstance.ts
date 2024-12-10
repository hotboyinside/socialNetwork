import { useMutation, UseMutationResult, useQuery } from 'react-query';
import { configuredApi } from './settings';
import { Method, Params } from './settings';

interface QueryInstanceProps {
	url: string;
	method?: Method;
	queryParams?: Params;
	bodyParams?: Params;
	options?: Record<string, string | number | boolean>;
}

export const QueryInstanceGet = <T>({
	url,
	queryParams,
	options,
}: QueryInstanceProps) => {
	return useQuery(
		[url, queryParams],
		() => configuredApi<T>(url, 'GET', queryParams),
		options
	);
};

export const QueryInstanceMutation = <T>({
	url,
	method,
	queryParams,
}: QueryInstanceProps): UseMutationResult<T, unknown, Params> => {
	return useMutation<T, unknown, Params>(params =>
		configuredApi<T>(url, method, queryParams, params)
	);
};
