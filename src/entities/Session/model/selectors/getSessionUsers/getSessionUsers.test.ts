import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { User, UserRole } from 'entities/User';
import { getSessionUsers } from './getSessionUsers';

describe('getSessionUsers', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      session: {
        data: {
          id: '1180a594-d348-444a-a6fe-0a4550e416f4',
          title: '',
          users: [
            {
              id: '1',
              firstName: 'Test 1',
              role: UserRole.DEALER,
            },
            {
              id: '2',
              firstName: 'Test 2',
              role: UserRole.GAMER,
            },
          ],
          settings: {
            autoJoinToGame: false,
            autoOpeningCards: false,
            changeChoiceAfterRoundEnd: false,
            dealerGamer: false,
          },
        },
      },
    };

    expect(getSessionUsers(state as StateSchema)).toBeInstanceOf(Array<User>);
    expect(getSessionUsers(state as StateSchema)?.length).toEqual(2);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getSessionUsers(state as StateSchema)).toEqual(undefined);
  });
});
