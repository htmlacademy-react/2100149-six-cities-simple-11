import { createReducer } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { changeActiveCard, changeSortType, changeCity, loadOffers, requireAuthorization, setOffersLoadingStatus } from './action';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { Cities, SortTypes, AuthorizationStatus } from '../const';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  city: City;
  offers: {
    data: Offers;
    isLoading: boolean;
    sortType: string;
  };
  activeCard: number | undefined;
};

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(changeCity, (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action: PayloadAction<Offers>) => {
      state.offers.data = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action: PayloadAction<boolean>) => {
      state.offers.isLoading = action.payload;
    })
    .addCase(changeSortType, (state, action: PayloadAction<string>) => {
      state.offers.sortType = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeActiveCard, (state, action: PayloadAction<number | undefined>) => {
      state.activeCard = action.payload;
    });
});

export { reducer };
