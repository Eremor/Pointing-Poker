import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getSessionError } from './getSessionError';

describe('getSessionError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      session: {
        error: 'test error',
      },
    };

    expect(getSessionError(state as StateSchema)).toEqual('test error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getSessionError(state as StateSchema)).toBeUndefined();
  });
});
