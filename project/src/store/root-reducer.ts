import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { actionProcess } from './action-process/action-process';
import { dataProcess } from './data-process/data-process';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: dataProcess.reducer,
  [NameSpace.Action]: actionProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
