import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getSessionLoading } from './getSessionLoading';

describe('getSessionLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      session: {
        isLoading: true,
      },
    };

    expect(getSessionLoading(state as StateSchema)).toBeTruthy();
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getSessionLoading(state as StateSchema)).toBeFalsy();
  });
});
