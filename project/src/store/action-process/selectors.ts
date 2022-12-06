import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getCity = (state: State) => state[NameSpace.Action].activeCity;

export const getActiveCard = (state: State) => state[NameSpace.Action].activeCard;

export const getSortType = (state: State) => state[NameSpace.Action].sortType;
