import { City } from './types/city';
import { Offers } from './types/offer';

export const getCity = (state: { city: City }) => state.city;
export const getCurrentCityOffers = (state: { currentCityOffers: Offers }) => state.currentCityOffers;
export const getSortType = (state: { sortType: string }) => state.sortType;
export const getActiveCard = (state: { activeCard: string }) => state.activeCard;
