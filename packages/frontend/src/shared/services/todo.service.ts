import axios, { AxiosResponse, AxiosRequestConfig, Axios } from 'axios';
import { ITodos } from './types';
import { HTTP_KEYS, STORAGE_KEYS } from '~shared/keys';

interface Headers extends Partial<AxiosRequestConfig> {
	queryString?: string | undefined;
	data?: ITodos;
}

export class HttpService {
	baseUrl: string;
	fetchingService: Axios;
	apiVersion: string;

	constructor(baseUrl: string, fetchingService = axios, apiVersion = 'api') {
		this.baseUrl = baseUrl;
		this.fetchingService = fetchingService;
		this.apiVersion = apiVersion;
	}

	getFullApiUrl(url: string): string {
		return `${this.baseUrl}/${this.apiVersion}/${url}`;
	}

	private populateTokenToHeaderConfig(): { [x: string]: string } {
		const { token } = JSON.parse(
			localStorage.getItem(STORAGE_KEYS.TODOS),
		).state;
		return {
			['Authorization']: `Bearer ${token}`,
		};
	}

	async getAll(config: Headers, withAuth: boolean): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		const query = config.queryString || '';
		return await this.fetchingService.get(
			this.getFullApiUrl('all') + query,
			config,
		);
	}

	async getOne(
		id: string,
		config: Headers,
		withAuth: boolean,
	): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return await this.fetchingService.get(
			this.getFullApiUrl(`${id}`),
			config,
		);
	}

	async post(config: Headers, withAuth: boolean): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return await this.fetchingService.post(
			this.getFullApiUrl(''),
			config.data,
			{ headers: config.headers },
		);
	}

	async put(
		id: string,
		config: Headers,
		withAuth: boolean,
	): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return await this.fetchingService.put(
			this.getFullApiUrl(`/${id}`),
			config.data,
			{ headers: config.headers },
		);
	}

	async delete(
		id: string,
		config: Headers,
		withAuth: boolean,
	): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return await this.fetchingService.delete(
			this.getFullApiUrl(`/${id}`),
			config,
		);
	}
}

export const todoService = new HttpService(
	HTTP_KEYS.BASE_URL,
	axios,
	HTTP_KEYS.API_TODO,
);
