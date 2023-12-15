import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
// import { useTranslation } from 'react-i18next';

export const checkSession = createAsyncThunk<
  boolean,
  string,
  ThunkConfig<string>
>('session/checkSession', async (sessionID, thunkApi) => {
  // const { t } = useTranslation();
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get(`/session/${sessionID}`);

    console.log(response);
    if (response.data !== undefined) {
      return true;
    }

    return false;
  } catch (error) {
    return rejectWithValue('check session error');
  }
});
