import { useQuery } from '@tanstack/react-query';
import { api, getData } from './api';
import { BeerModel } from '../declarations/models/beer.model';

const fetchBeer = (beerId: number) =>
  api.get(`/beers/${beerId}`).then(getData<BeerModel[]>);

export const useBeer = (beerId: number) =>
  useQuery([`beer-${beerId}`, beerId], () => fetchBeer(beerId));
