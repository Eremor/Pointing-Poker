import { createAsyncThunk } from '@reduxjs/toolkit';
import { Session } from '../../types/session';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface CreateSessionProps {
  title: string;
  firstName: string;
  lastName?: string;
  position?: string;
  avatar?: string;
}

export const createSession = createAsyncThunk<
  Session,
  CreateSessionProps,
  ThunkConfig<string>
>('session/createSession', async (createSessionData, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.post<Session>(
      '/session',
      createSessionData
    );

    if (!response.data) {
      throw new Error();
    }

    extra.navigate?.(`/${response.data.id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue('The game was not created');
  }
});
