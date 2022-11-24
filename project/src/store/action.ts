import { createAction } from '@reduxjs/toolkit';
import { UserData } from '../types/user-data';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const loadOffers = createAction('data/loadOffers', (value: Offers) => ({ payload: value }));
export const setOffersLoadingStatus = createAction('data/setOffersLoadingStatus', (value: boolean) => ({payload: value}));
export const changeSortType = createAction('data/changeSortType', (value: string) => ({ payload: value }));
export const changeCity = createAction('data/changeCity', (value: City) => ({ payload: value }));
export const changeActiveCard = createAction('data/changeActiveCard', (value: number | undefined) => ({ payload: value }));
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const loadUserData = createAction('user/loadUserData', (value: UserData) => ({ payload: value }));
export const setError = createAction<string | null>('app/setError');
