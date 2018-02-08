import { Dispatch } from 'vuex';
import { RootState } from '~/store/index';
import { State } from '~/store/modules/auth/state';
import { actions } from './actions';
import { mutations } from './mutations';

describe('store: authentication -> actions', () => {
  let commit;
  let dispatch: Dispatch;
  let getters;
  let rootGetters;
  let rootState: RootState;
  let state: State;

  beforeEach(() => {
    // mock state
    state = { client: '', username: '', email: '', isLogged: false };

    // mock commit
    commit = (type, payload) => {
      const mutation = mutations[type];
      expect(mutation).toBeDefined();
      mutation(state, { ...payload });
    };
  });

  test('AUTH_LOGIN', () => {
    // apply mutation
    actions.doLogin({ state, commit, dispatch, getters, rootState, rootGetters }, { username: 'helmuthdu', email: 'helmuthdu@gmail.com' });
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
