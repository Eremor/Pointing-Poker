import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getSessionSettings } from './getSessionSettings';

describe('getSessionSettings', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      session: {
        data: {
          id: '1180a594-d348-444a-a6fe-0a4550e416f4',
          title: '',
          users: [],
          settings: {
            autoJoinToGame: false,
            autoOpeningCards: false,
            changeChoiceAfterRoundEnd: false,
            dealerGamer: false,
          },
        },
      },
    };

    expect(getSessionSettings(state as StateSchema)).toBeInstanceOf(Object);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getSessionSettings(state as StateSchema)).toEqual(undefined);
  });
});
