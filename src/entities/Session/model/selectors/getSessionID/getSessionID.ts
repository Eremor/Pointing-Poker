import { StateSchema } from 'app/providers/StoreProvider';

export const getSessionID = (state: StateSchema) => state.session?.data!.id;
