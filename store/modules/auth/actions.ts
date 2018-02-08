import { ActionContext, ActionTree } from 'vuex';
import { RootState } from '~/store/index';
import { State } from '~/store/modules/auth/state';
import { Types } from '~/store/modules/auth/types';

export interface Actions<S, R> extends ActionTree<S, R> {
  doLogin: (context: ActionContext<S, R>, payload: any) => void;
  doLogout: (context: ActionContext<S, R>) => void
}

export const actions: Actions<State, RootState> = {
  doLogin: ({ commit }, payload: State) => {
    commit(Types.AUTH_SET_USER, { ...payload, isLogged: true });
  },
  doLogout: ({ commit }) => {
    commit(Types.AUTH_SET_USER, { username: '', email: '', isLogged: false });
  }
};
