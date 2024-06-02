import axios, { AxiosResponse } from 'axios';
import { HTTP_KEYS, STORAGE_KEYS } from '~shared/keys';
import { HttpService } from './todo.service';
import { LoginUser, PasswordUser, RegisterUser } from './types';

class UserService extends HttpService {
	constructor(baseUrl: string, fetchingService = axios, apiVersion = 'api') {
		super(baseUrl, fetchingService, apiVersion);
	}

	private getTokenFromStorage(): { [x: string]: string } {
		const { token } = JSON.parse(
			localStorage.getItem(STORAGE_KEYS.TODOS),
		).state;
		return {
			['Authorization']: `Bearer ${token}`,
		};
	}
	async register(data: RegisterUser): Promise<AxiosResponse> {
		return await this.fetchingService.post(
			this.getFullApiUrl('register'),
			data,
		);
	}
	async login(data: LoginUser): Promise<AxiosResponse> {
		return await this.fetchingService.post(
			this.getFullApiUrl('login'),
			data,
		);
	}
	async logout(): Promise<AxiosResponse> {
		return await this.fetchingService.post(
			this.getFullApiUrl('logout'),
			{},
			{ headers: this.getTokenFromStorage() },
		);
	}
	async resetPassword(
		data: Pick<PasswordUser, 'email'>,
	): Promise<AxiosResponse> {
		return await this.fetchingService.post(
			this.getFullApiUrl('reset-password'),
			data,
		);
	}
	async changePassword(
		data: Omit<PasswordUser, 'email'>,
	): Promise<AxiosResponse> {
		return await this.fetchingService.put(
			this.getFullApiUrl('password'),
			data,
		);
	}
}

const userService = new UserService(
	HTTP_KEYS.BASE_URL,
	axios,
	HTTP_KEYS.API_USER,
);

export default userService;
