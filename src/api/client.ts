import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import config from './config';

export class Api {
  public instance: AxiosInstance;

  public constructor(instanceConfig: AxiosRequestConfig) {
    this.instance = axios.create(instanceConfig);
  }
}

const client = new Api(config).instance;
export default client;
