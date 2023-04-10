import axios, { AxiosResponse } from 'axios';

export const getData = <T>(res: AxiosResponse<T>) => res.data;

export const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
});
