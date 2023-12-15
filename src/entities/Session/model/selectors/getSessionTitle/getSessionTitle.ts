import { StateSchema } from 'app/providers/StoreProvider';

export const getSessionTitle = (state: StateSchema) =>
  state.session?.data?.title;
