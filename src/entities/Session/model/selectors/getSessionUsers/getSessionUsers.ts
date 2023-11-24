import { StateSchema } from 'app/providers/StoreProvider';

export const getSessionUsers = (state: StateSchema) =>
  state.session?.data?.users;
