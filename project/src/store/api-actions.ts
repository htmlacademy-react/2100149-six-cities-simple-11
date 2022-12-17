import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveToken, dropToken } from '../services/token';
import { State } from '../types/state';
import { CurrentOfferData, Offer, Offers } from '../types/offer';
import { UserReview, Reviews } from '../types/review';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { APIRoute, ReviewSendingStatus} from '../const';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<Offers>(APIRoute.Offers);

    return data;
  },
);

export const fetchCurrentOfferDataAction = createAsyncThunk<CurrentOfferData, string, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentOffer',
  async (id, { extra: api }) => {
    const { data: offerData } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
    const { data: reviewsData } = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);
    const { data: nearbyOffersData } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);

    return {
      offer: offerData,
      reviews: {
        data: reviewsData,
        sendingStatus: ReviewSendingStatus.Rejected
      },
      nearbyOffers: nearbyOffersData,
      isLoading: false
    };
  },
);

export const sendReviewAction = createAsyncThunk<Reviews, UserReview, {
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({ id, rating, comment }, { extra: api }) => {
    const { data } = await api.post<Reviews>(`${APIRoute.Reviews}/${id}`, { comment, rating });

    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);

    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token);

    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
