import { City } from './types/city';

export enum AppRoute {
  Login = '/login',
  Main = '/',
  Room = '/offer/:id',
  NotFound = '*'
}

export const Cities: City[] = [
  {
    name: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
  },
  {
    name: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
  },
  {
    name: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
  },
  {
    name: 'Amsterdam',
    lat: 52.374,
    lng: 4.88969,
  },
  {
    name: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
  },
  {
    name: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
  },
];
