import { createReducer } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { changeActiveCard, changeSortType, changeCity, loadOffers } from './action';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { Cities, SortTypes } from '../const';

type InitialState = {
  city: City;
  currentCityOffers: Offers;
  sortType: string;
  activeCard: string;
};

const initialState: InitialState = {
  city: Cities[0],
  currentCityOffers: [],
  sortType: SortTypes.Popular,
  activeCard: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action: PayloadAction<Offers>) => {
      state.currentCityOffers = action.payload;
    })
    .addCase(changeSortType, (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    })
    .addCase(changeActiveCard, (state, action: PayloadAction<string>) => {
      state.activeCard = action.payload;
    });
});

export { reducer };
