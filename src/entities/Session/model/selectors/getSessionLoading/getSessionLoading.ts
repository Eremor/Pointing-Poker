import { StateSchema } from 'app/providers/StoreProvider';

export const getSessionLoading = (state: StateSchema) =>
  state.session?.isLoading || false;
