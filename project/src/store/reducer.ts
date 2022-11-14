import { createReducer } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { changeCity, loadOffers } from './action';
import { Offers } from '../types/offer';

type InitialState = {
  city: string;
  offers: Offers | undefined;
  //selectedOfferId: number | undefined;
};

const initialState: InitialState = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action: PayloadAction<Offers>) => {
      state.offers = action.payload;
    });
});

export { reducer };
