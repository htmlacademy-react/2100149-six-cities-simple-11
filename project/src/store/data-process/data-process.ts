import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersData } from '../../types/state';
import { fetchOffersAction, fetchCurrentOfferDataAction, sendReviewAction} from '../api-actions';

const initialState: OffersData = {
  offers: {
    data: [],
    isLoading: false,
  },
  currentOffer: {
    offer: null,
    reviews: {
      data: [],
      isSending: false
    },
    nearbyOffers: [],
    isLoading: true,
  }
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.offers.isLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers.data = action.payload;
        state.offers.isLoading = false;
      })
      .addCase(fetchCurrentOfferDataAction.pending, (state) => {
        state.currentOffer.isLoading = true;
      })
      .addCase(fetchCurrentOfferDataAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.currentOffer.reviews.isSending = true;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.currentOffer.reviews.data = action.payload;
        state.currentOffer.reviews.isSending = false;
      });
  }
});
