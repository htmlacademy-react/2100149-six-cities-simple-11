export enum AppRoute {
  Login = '/login',
  Main = '/',
  MainEmpty = '/empty',
  Room = '/offer/:id',
  NotFound = '*'
}

export enum APIRoute {
  Offers = '/hotels',
  Reviews = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  User = 'USER',
  Data = 'DATA',
  Action = 'ACTION'
}

export enum ReviewSendingStatus {
  Sended= 'SENDED',
  Rejected = 'REJECTED',
  Pending = 'PENDING',
}
export const RatingInputs = [
  {
    value: 5,
    title: 'perfect'
  },
  {
    value: 4,
    title: 'good'
  },
  {
    value: 3,
    title: 'not bad'
  },
  {
    value: 2,
    title: 'badly'
  },
  {
    value: 1,
    title: 'terribly'
  }
];

export const ONE_STAR_WIDTH = 20;

export const IMAGES_COUNT = 6;

export const REVIEWS_COUNT = 10;

export enum ReviewLength {
  Min = 50,
  Max = 300
}

export const Cities = [
  {
    name: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
    zoom: 12
  },
  {
    name: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 12
  },
  {
    name: 'Brussels',
    lat: 50.846557,
    lng: 4.351697,
    zoom: 12
  },
  {
    name: 'Amsterdam',
    lat: 52.374,
    lng: 4.88969,
    zoom: 12
  },
  {
    name: 'Hamburg',
    lat: 53.550341,
    lng: 10.000654,
    zoom: 12
  },
  {
    name: 'Dusseldorf',
    lat: 51.225402,
    lng: 6.776314,
    zoom: 12
  },
];

export enum SortTypes {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first'
}
