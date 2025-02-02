import axios, { AxiosResponse } from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const requestProcessor = {
	get: async <T>(url: string, params?: object): Promise<AxiosResponse<T>> => {
		const response = await apiClient.get<T>(url, { params });
		return response;
	},

	post: async <T>(url: string, body: any): Promise<AxiosResponse<T>> => {
		const response = await apiClient.post<T>(url, body);
		return response;
	},
};

export default apiClient;
