import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction('changeCity', (value: City) => ({ payload: value }));
export const loadOffers = createAction('data/loadOffers', (value: Offers) => ({ payload: value }));
export const setOffersLoadingStatus = createAction('data/setOffersLoadingStatus', (offersLoadingStatus: boolean) => ({payload: offersLoadingStatus}));
export const changeActiveCard = createAction('changeActiveCard', (value: number | undefined) => ({ payload: value }));
export const changeSortType = createAction('changeSortType', (value: string) => ({ payload: value }));

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
