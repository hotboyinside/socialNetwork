import { useQuery } from 'react-query';
import { configuredApi } from './settings';
import { Method, Params } from './settings';

interface QueryInstanceProps {
	url: string;
	method?: Method;
	params?: Params;
}

export const QueryInstance = <T>({
	url,
	method,
	params,
}: QueryInstanceProps) => {
	return useQuery([url, params], () => configuredApi<T>(url, method, params));
};
