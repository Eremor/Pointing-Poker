import { createAsyncThunk } from '@reduxjs/toolkit';
import { Session } from '../../types/session';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, UserRole } from 'entities/User';
import { sessionActions } from '../../slice/sessionSlice';

interface CreateSessionProps {
  title: string;
  firstName: string;
  role: UserRole;
  lastName?: string;
  position?: string;
  avatar?: string;
}

export const createSession = createAsyncThunk<
  void,
  CreateSessionProps,
  ThunkConfig<string>
>('session/createSession', (createSessionData, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;

  try {
    extra.socket?.emit('init session', createSessionData);
    extra.socket?.on('session initiated', (data: Session) => {
      dispatch(sessionActions.setSessionData(data));
      extra.navigate?.(`/${data.id}`);
    });
    extra.socket?.on('session users changed', (data: User[]) => {
      dispatch(sessionActions.setSessionUsers(data));
    });
  } catch (error) {
    console.log(error);
    return rejectWithValue('The session was not created');
  }
});
