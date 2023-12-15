import { StateSchema } from 'app/providers/StoreProvider';

export const getSessionSettings = (state: StateSchema) =>
  state.session?.data?.settings;
