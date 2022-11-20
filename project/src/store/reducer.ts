import { createReducer } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { changeActiveCard, changeSortType, changeCity, loadOffers, requireAuthorization, setOffersLoadingStatus } from './action';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { Cities, SortTypes, AuthorizationStatus } from '../const';

type InitialState = {
  city: City;
  currentCityOffers: Offers;
  sortType: string;
  activeCard: number | undefined;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  city: Cities[0],
  currentCityOffers: [],
  sortType: SortTypes.Popular,
  activeCard: undefined,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action: PayloadAction<Offers>) => {
      state.currentCityOffers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action: PayloadAction<boolean>) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(changeSortType, (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeActiveCard, (state, action: PayloadAction<number | undefined>) => {
      state.activeCard = action.payload;
    });
});

export { reducer };
