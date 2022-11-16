import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offers } from '../types/offer';

export const changeCity = createAction('changeCity', (value: City) => ({ payload: value }));
export const loadOffers = createAction('loadOffers', (value: Offers) => ({ payload: value }));
export const changeActiveCard = createAction('changeActiveCard', (value: string) => ({ payload: value }));
export const changeSortType = createAction('changeSortType', (value: string) => ({ payload: value }));
