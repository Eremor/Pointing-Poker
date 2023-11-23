import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { sessionReducer } from 'entities/Session';

export default combineReducers<ReducersMapObject<StateSchema>>({
  user: userReducer,
  session: sessionReducer,
});
