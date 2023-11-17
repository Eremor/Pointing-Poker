import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

export default combineReducers<ReducersMapObject<StateSchema>>({
  user: userReducer,
});
