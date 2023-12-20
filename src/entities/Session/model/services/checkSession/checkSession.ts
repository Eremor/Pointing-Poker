import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Session } from '../../types/session';

export const checkSession = createAsyncThunk<
  Session,
  string,
  ThunkConfig<string>
>('session/checkSession', async (sessionID, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Session>(`/session/${sessionID}`);

    return response.data;
  } catch (error) {
    return rejectWithValue('Invalid session ID');
  }
});
