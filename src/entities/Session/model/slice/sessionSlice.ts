import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Session, SessionSchema } from '../types/session';
import { createSession } from '../services/createSession/createSession';

const initialState: SessionSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createSession.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        createSession.fulfilled,
        (state, action: PayloadAction<Session>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        createSession.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { actions: sessionActions } = sessionSlice;
export const { reducer: sessionReducer } = sessionSlice;
