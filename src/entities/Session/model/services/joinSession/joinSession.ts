import { createAsyncThunk } from "@reduxjs/toolkit";
import { UUID } from "crypto";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, UserRole } from "entities/User";
import { sessionActions } from "../../slice/sessionSlice";

interface JoinSessionProps {
  sessionID: UUID;
  firstName: string;
  role: UserRole;
  lastName?: string;
  position?: string;
  avatar?: string;
}

export const joinSession = createAsyncThunk<
  void, JoinSessionProps, ThunkConfig<string>
>('session/joinSession', (joinSessionData, thunkApi) => {
  const { extra, rejectWithValue, dispatch } = thunkApi;

  try {
    extra.socket?.emit('join session', joinSessionData);
    extra.socket?.on('session users changed', (data: User[]) => {
      dispatch(sessionActions.setSessionUsers(data));
      extra.navigate?.(`/${joinSessionData.sessionID}`);
    })
  } catch (error) {
    return rejectWithValue('The user could not join the session')
  }
});