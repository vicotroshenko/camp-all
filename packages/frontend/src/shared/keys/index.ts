export const enum ROUTER_KEYS {
	BASE_NAME = '/',
	BY_ID = '/:id',
	LOGIN = '/auth/login',
	REGISTER = '/auth/register',
	HOME = '/home',
	ALL_MATCH = '/*',
	PASSWORD = '/auth/reset-password',
	FORGOT_PASSWORD = '/auth/forgot-password',
}

export const enum HTTP_KEYS {
	BASE_URL = 'http://localhost:3030',
	CREATE_TODO = '/',
	ALL_TODOS = 'all',
	API_TODO = 'api/todos',
	API_USER = 'api/user',
}

export const STORAGE_KEYS = Object.freeze({
	TODOS: 'AUTH_TODOS',
});

export const enum RESET_EMAIL {
	DEFAULT = 'Please enter your email we will send you a link for reset your old password.',
	ERROR = 'Something wrong, try again!',
	SUCCESS = 'Check you emile box. We sent you link to reset your password.',
	INPUT_ERROR = 'Passwords do not match, try again',
}

export const enum FILTER_STATUS {
	ALL = 'all',
	PUBLIC = 'public',
	PRIVATE = 'private',
	COMPLETED = 'completed',
}

export const enum QUERY_PARAM {
	STATUS = 'status',
	SEARCH = 'search',
}

export const enum FETCHING_STATUS {
	SUCCESS = 'success',
	LOADING = 'loading',
	ERROR = 'error',
}
