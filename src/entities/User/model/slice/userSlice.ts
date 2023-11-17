import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
  data: undefined,
  isLoading: false,
  error: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
