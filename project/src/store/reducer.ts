import { createReducer } from '@reduxjs/toolkit';
import {
  changeActiveCard,
  changeSortType,
  changeCity,
  loadOffers,
  requireAuthorization,
  loadUserData,
  setOffersLoadingStatus,
} from './action';
import { UserData } from '../types/user-data';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { Cities, SortTypes, AuthorizationStatus } from '../const';

type InitialState = {
  user: {
    authorizationStatus: AuthorizationStatus;
    userData: UserData | null;
  };
  city: City;
  offers: {
    data: Offers;
    isLoading: boolean;
    sortType: string;
  };
  activeCard: number | undefined;
};

const initialState: InitialState = {
  user: {
    authorizationStatus: AuthorizationStatus.Unknown,
    userData: null,
  },
  city: Cities[0],
  offers: {
    data: [],
    isLoading: false,
    sortType: SortTypes.Popular
  },
  activeCard: undefined,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers.data = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.offers.isLoading = action.payload;
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
    .addCase(changeActiveCard, (state, action) => {
      state.activeCard = action.payload;
    });
});

export { reducer };
