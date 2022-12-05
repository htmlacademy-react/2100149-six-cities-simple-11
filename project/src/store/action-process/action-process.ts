import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, SortTypes, Cities } from '../../const';
import { UserActionsProcess } from '../../types/state';
import { City } from '../../types/city';

const initialState: UserActionsProcess = {
  activeCity: Cities[0],
  activeCard: undefined,
  sortType: SortTypes.Popular
};

export const actionProcess = createSlice({
  name: NameSpace.Action,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.activeCity = action.payload;
    },
    changeActiveCard: (state, action: PayloadAction<number | undefined>) => {
      state.activeCard = action.payload;
    },
    changeSortType: (state, action: PayloadAction<SortTypes>) => {
      state.sortType = action.payload;
    }
  },
});

export const { changeCity, changeActiveCard, changeSortType } = actionProcess.actions;
