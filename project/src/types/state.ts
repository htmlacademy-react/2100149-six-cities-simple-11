import { store } from '../store/index';
import { UserData } from './user-data';
import { CurrentOfferData, Offers } from './offer';
import { AuthorizationStatus } from '../const';
import { City } from './city';

export type OffersData = {
  offers: {
    data: Offers;
    isLoading: boolean;
  };
  currentOffer: CurrentOfferData;
}

export type UserActionsProcess = {
  activeCity: City;
  activeCard: number | undefined;
  sortType: string;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
