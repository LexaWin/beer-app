import { useQuery } from '@tanstack/react-query';
import { api, getData } from './api';
import { BeerModel } from '../declarations/models/beer.model';

export const BEERS_NUMBER = 5;

const fetchBeers = (pageNumber: number) =>
  api
    .get(`/beers?page=${pageNumber}&per_page=${BEERS_NUMBER}`)
    .then(getData<BeerModel[]>);

export const useBeers = (pageNumber: number) =>
  useQuery(['beers', pageNumber], () => fetchBeers(pageNumber));
