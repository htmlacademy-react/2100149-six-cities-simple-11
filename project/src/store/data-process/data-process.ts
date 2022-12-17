import { createSlice } from '@reduxjs/toolkit';
import { fetchOffersAction, fetchCurrentOfferDataAction, sendReviewAction } from '../api-actions';
import { sortReviews } from '../../utils';
import { NameSpace, ReviewSendingStatus } from '../../const';
import { OffersData } from '../../types/state';

const initialState: OffersData = {
  offers: {
    data: [],
    isLoading: false,
  },
  currentOffer: {
    offer: null,
    reviews: {
      data: [],
      sendingStatus: ReviewSendingStatus.Rejected,
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
        sortReviews(state.currentOffer.reviews.data);
      })
      .addCase(sendReviewAction.pending, (state) => {
        state.currentOffer.reviews.sendingStatus = ReviewSendingStatus.Pending;
      })
      .addCase(sendReviewAction.rejected, (state) => {
        state.currentOffer.reviews.sendingStatus = ReviewSendingStatus.Rejected;
      })
      .addCase(sendReviewAction.fulfilled, (state, action) => {
        state.currentOffer.reviews.data = sortReviews(action.payload);
        state.currentOffer.reviews.sendingStatus = ReviewSendingStatus.Sended;
      });
  }
});
