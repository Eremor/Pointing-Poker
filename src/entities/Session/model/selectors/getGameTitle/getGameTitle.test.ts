import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getGameTitle } from './getGameTitle';

describe('getGameTitle', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      session: {
        data: {
          id: '1180a594-d348-444a-a6fe-0a4550e416f4',
          title: 'Game title',
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

    expect(getGameTitle(state as StateSchema)).toEqual('Game title');
  });

  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getGameTitle(state as StateSchema)).toBeUndefined();
  });
});
