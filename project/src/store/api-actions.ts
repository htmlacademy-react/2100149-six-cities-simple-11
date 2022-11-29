import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loadOffers,
  loadCurrentOfferData,
  setCurrentOfferLoadingStatus,
  setOffersLoadingStatus,
  requireAuthorization,
  loadUserData,
  sendReview
} from './action';
import { saveToken, dropToken } from '../services/token';
import { AppDispatch, State } from '../types/state';
import { Offer, Offers } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { APIRoute, AuthorizationStatus } from '../const';
import { UserReview, Reviews } from '../types/review';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingStatus(true));
    const { data } = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchCurrentOfferDataAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOffer',
  async (id, { dispatch, extra: api }) => {
    dispatch(setCurrentOfferLoadingStatus(true));
    const { data: offerData } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    const { data: reviewsData } = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    const { data: nearbyOffersData } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(loadCurrentOfferData({
      offer: offerData,
      reviews: reviewsData,
      nearbyOffers: nearbyOffersData,
      isLoading: false
    }));
  },
);

export const sendReviewAction = createAsyncThunk<void, UserReview, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({ id, rating, comment }, { dispatch, extra: api }) => {
    const { data } = await api.post<Reviews>(`${APIRoute.Reviews}/${id}`, { comment, rating });
    dispatch(sendReview(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUserData(data));
    } catch (error) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUserData(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
