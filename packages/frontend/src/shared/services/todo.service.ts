import axios, { AxiosResponse, Axios } from 'axios';
import { HTTP_KEYS, STORAGE_KEYS } from '~shared/keys';
import { Headers } from './types';

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

	async put(config: Headers, withAuth: boolean): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return await this.fetchingService.put(
			this.getFullApiUrl(`/${config.id}`),
			config.data,
			{ headers: config.headers },
		);
	}

	async delete(config: Headers, withAuth: boolean): Promise<AxiosResponse> {
		if (withAuth) {
			config.headers = {
				...config.headers,
				...this.populateTokenToHeaderConfig(),
			};
		}
		return await this.fetchingService.delete(
			this.getFullApiUrl(`/${config.id}`),
			config,
		);
	}
}

export const todoService = new HttpService(
	HTTP_KEYS.BASE_URL,
	axios,
	HTTP_KEYS.API_TODO,
);
