import { configureStore } from '@reduxjs/toolkit';
import { NavigateOptions, To } from 'react-router-dom';
import { StateSchema } from './StateSchema';
import rootReducer from './rootReducer';
import { api, socket } from 'shared/api/api';

export const createReduxStore = (
  initialState?: StateSchema,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            socket: socket,
            api: api,
            navigate,
          },
        },
      }),
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
