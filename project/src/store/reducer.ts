import { createReducer } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import {
  changeActiveCard,
  changeSortType,
  changeCity,
  loadOffers,
  requireAuthorization,
  loadUserData,
  setOffersLoadingStatus,
  setError
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
  error: string | null;
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
  error: null
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
      state.user.authorizationStatus = action.payload;
    })
    .addCase(loadUserData, (state, action: PayloadAction<UserData>) => {
      state.user.userData = action.payload;
    })
    .addCase(changeActiveCard, (state, action: PayloadAction<number | undefined>) => {
      state.activeCard = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
