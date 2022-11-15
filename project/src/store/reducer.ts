import { createReducer } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { changeActiveCard, changeCity, loadOffers } from './action';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { Cities } from '../const';

type InitialState = {
  city: City;
  offers: Offers;
  activeCard: string;
};

const initialState: InitialState = {
  city: Cities[0],
  offers: [],
  activeCard: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action: PayloadAction<Offers>) => {
      state.offers = action.payload;
    })
    .addCase(changeActiveCard, (state, action: PayloadAction<string>) => {
      state.activeCard = action.payload;
    });
});

export { reducer };
