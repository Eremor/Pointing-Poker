import { TestAsyncThunk } from 'shared/lib/test/testAsyncThunk/testAsyncThunk';
import { createSession } from './createSession';
import { Session } from '../../types/session';
import { UserRole } from 'entities/User';

jest.mock('axios');

const createSessionValue = {
  title: 'Test game',
  firstName: 'Test name',
  lastName: 'Test last name',
  position: 'tester',
};

describe('createSession', () => {
  test('successful session creation', async () => {
    const resultData: Session = {
      id: '1180a594-d348-444a-a6fe-0a4550e416f4',
      title: 'Test game',
      users: [
        {
          id: '123',
          firstName: 'Test name',
          lastName: 'Test last name',
          position: 'tester',
          role: UserRole.DEALER,
        },
      ],
      settings: {
        autoJoinToGame: false,
        autoOpeningCards: false,
        changeChoiceAfterRoundEnd: false,
        dealerGamer: false,
      },
    };

    const thunk = new TestAsyncThunk(createSession);

    thunk.api.post.mockReturnValue(Promise.resolve({ data: resultData }));

    const result = await thunk.callThunk(createSessionValue);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(resultData);
  });

  test('should return rejected', async () => {
    const thunk = new TestAsyncThunk(createSession);

    thunk.api.post.mockReturnValue(Promise.resolve({ status: 400 }));

    const result = await thunk.callThunk(createSessionValue);

    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('The game was not created');
  });
});
