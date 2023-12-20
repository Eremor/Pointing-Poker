import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Session, SessionSchema } from '../types/session';
import { User } from 'entities/User';

import { createSession } from '../services/createSession/createSession';
import { checkSession } from '../services/checkSession/checkSession';

const initialState: SessionSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSessionData: (state, action: PayloadAction<Session>) => {
      state.data = action.payload;
    },
    setSessionUsers: (state, action: PayloadAction<User[]>) => {
      state.data!.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSession.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(createSession.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(
        createSession.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addCase(checkSession.pending, (state) => {
        state.error = undefined;
        state.data = undefined;
        state.isLoading = true;
      })
      .addCase(
        checkSession.fulfilled,
        (state, action: PayloadAction<Session>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        checkSession.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { actions: sessionActions } = sessionSlice;
export const { reducer: sessionReducer } = sessionSlice;
