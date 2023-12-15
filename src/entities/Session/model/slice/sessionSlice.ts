import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Session, SessionSchema } from '../types/session';
import { createSession } from '../services/createSession/createSession';
import { User } from 'entities/User';

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
        // state.data = action.payload;
      })
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
