import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { requestProcessor } from '../axiosClient';
import { AxiosResponse } from 'axios';

export const useFetch = <T, Variables = object>(
    url: string,
    options?: UseQueryOptions<T, Error> & { params?: Variables }
) => {
    return useQuery<T, Error>({
        queryKey: [url, options?.params],
        queryFn: async () => {
            const response: AxiosResponse<T> = await requestProcessor.get<T>(
                url,
                options
            );
            return response.data;
        },
        ...options,
    });
};
export const usePost = <T, Variables = object>(
    url: string,
    options?: UseMutationOptions<AxiosResponse<T>, Error, Variables>
) => {
    return useMutation<AxiosResponse<T>, Error, Variables>({
        mutationKey: [url],
        mutationFn: (body) => requestProcessor.post<T>(url, body),
        ...options,
    });
};
