import { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
	baseURL: 'https://jsonplaceholder.typicode.com',
	headers: { Accept: 'application/json' },
};

export { config };
