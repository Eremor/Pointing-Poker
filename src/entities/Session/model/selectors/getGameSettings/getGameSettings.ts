import { StateSchema } from 'app/providers/StoreProvider';

export const getGameSettings = (state: StateSchema) =>
  state.session?.data?.settings;
