import { StateSchema } from 'app/providers/StoreProvider';

export const getGameTitle = (state: StateSchema) => state.session?.data?.title;
