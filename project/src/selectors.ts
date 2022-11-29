import { State } from './types/state';

export const getCity = (state: State) => state.activeCity;
export const getOffers = (state: State) => state.offers.data;
export const getCurrentOfferData = (state: State) => state.currentOffer;
export const getOffersLoadingStatus = (state: State) => state.offers.isLoading;
export const getSortType = (state: State) => state.offers.sortType;
export const getActiveCard = (state: State) => state.activeCard;
export const getUserData = (state: State) => state.user;
