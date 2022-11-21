import { City } from './types/city';

export enum AppRoute {
  Login = '/login',
  Main = '/',
  MainEmpty = '/empty',
  Room = '/offer/:id',
  NotFound = '*'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
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

export enum SortTypes {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}
