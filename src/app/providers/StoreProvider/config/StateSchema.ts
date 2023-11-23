import { NavigateOptions, To } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import { Socket } from 'socket.io-client';

import { UserSchema } from 'entities/User';
import { SessionSchema } from 'entities/Session';

export interface StateSchema {
  user: UserSchema;
  session: SessionSchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  socket?: Socket;
  navigate?: (to: To, option?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
