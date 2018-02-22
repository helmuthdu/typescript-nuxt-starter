import { RootState } from '@/store';
import { State } from '@/store/modules/auth/state';
import { Dispatch } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';

describe('store: authentication -> actions', () => {
  let state: State;
  let commit: any;
  let dispatch: Dispatch;
  let getters: any;
  let rootGetters: any;
  let rootState: RootState;

  beforeEach(() => {
    // mock state
    state = { client: '', username: '', email: '', isLogged: false, password: '' };

    // mock commit
    commit = (type: string, payload: State) => {
      const mutation = mutations[type];
      expect(mutation).toBeDefined();
      mutation(state, { ...payload });
    };
  });

  test('AUTH_LOGIN', () => {
    // apply mutation
    actions.doLogin({ state, commit, dispatch, getters, rootState, rootGetters }, {
      username: 'helmuthdu',
      email: 'helmuthdu@gmail.com'
    });
    // assert result
    expect(state.isLogged).toBe(true);
  });

  test('AUTH_LOGOUT', () => {
    // apply mutation
    actions.doLogout({ state, commit, dispatch, getters, rootState, rootGetters });
    // assert result
    expect(state.isLogged).toBe(false);
  });
});
