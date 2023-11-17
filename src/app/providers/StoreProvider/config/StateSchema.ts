import { NavigateOptions, To } from 'react-router-dom';
import { UserSchema } from 'entities/User';

export interface StateSchema {
  user: UserSchema;
}

export interface ThunkExtraArg {
  navigate?: (to: To, option?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
