import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { config } from './config';

export class Api {
	public instance: AxiosInstance;

	public constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(config);
	}
}

const client = new Api(config).instance;
export { client };
