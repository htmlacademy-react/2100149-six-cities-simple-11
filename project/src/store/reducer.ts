import { createReducer } from '@reduxjs/toolkit';
import {
  changeActiveCard,
  changeSortType,
  changeCity,
  loadOffers,
  loadCurrentOfferData,
  requireAuthorization,
  loadUserData,
  setOffersLoadingStatus,
  setCurrentOfferLoadingStatus,
  sendReview,
} from './action';
import { UserData } from '../types/user-data';
import { City } from '../types/city';
import { CurrentOfferData, Offers } from '../types/offer';
import { Cities, SortTypes, AuthorizationStatus } from '../const';

type InitialState = {
  user: {
    authorizationStatus: AuthorizationStatus;
    userData: UserData | null;
  };
  activeCity: City;
  activeCard: number | undefined;
  offers: {
    data: Offers;
    isLoading: boolean;
    sortType: string;
  };
  currentOffer: CurrentOfferData;
};

const initialState: InitialState = {
  user: {
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
  },
  activeCity: Cities[0],
  activeCard: undefined,
  offers: {
    data: [],
    isLoading: false,
    sortType: SortTypes.Popular
  },
  currentOffer: {
    offer: null,
    reviews: [],
    nearbyOffers: [],
    isLoading: false,
  }
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers.data = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.offers.isLoading = action.payload;
    })
    .addCase(loadCurrentOfferData, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setCurrentOfferLoadingStatus, (state, action) => {
      state.currentOffer.isLoading = action.payload;
    })
    .addCase(changeActiveCard, (state, action) => {
      state.activeCard = action.payload;
    })
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.offers.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.user.authorizationStatus = action.payload;
    })
    .addCase(loadUserData, (state, action) => {
      state.user.userData = action.payload;
    })
    .addCase(sendReview, (state, action) => {
      state.currentOffer.reviews = action.payload;
    });
});

export { reducer };
