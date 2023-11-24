import { StateSchema } from 'app/providers/StoreProvider';

export const getSessionError = (state: StateSchema) => state.session?.error;
