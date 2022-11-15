import { City } from './types/city';
import { Offers } from './types/offer';

export const getCity = (state: { city: City }) => state.city;
export const getActiveCard = (state: { activeCard: string }) => state.activeCard;
export const getCurrentCityOffers = (state: { currentCityOffers: Offers }) => state.currentCityOffers;
