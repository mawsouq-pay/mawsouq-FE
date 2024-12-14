import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { requestProcessor } from '../axiosClient';
import { AxiosResponse } from 'axios';

export const useFetch = <T, Variables = object>(
    url: string,
    options?: UseQueryOptions<AxiosResponse<T>, Error, Variables>
) => {
    return useQuery<AxiosResponse<T>, Error, Variables>({
        queryKey: [url],
        queryFn: (params) => requestProcessor.get<T>(url, params),
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
