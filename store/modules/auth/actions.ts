import { config } from '~/config';
import { RootState } from '~/store';
import { State } from '~/store/modules/auth/state';
import { Types } from '~/store/modules/auth/types';
import axios from 'axios';
import qs from 'qs';
import { ActionContext, ActionTree } from 'vuex';

export interface Actions<S, R> extends ActionTree<S, R> {
  doLogin: (context: ActionContext<S, R>, payload: any) => void;
  doLogout: (context: ActionContext<S, R>) => void;
}

export const actions: Actions<State, RootState> = {
  doLogin: async ({ commit }, payload: State) => {
    commit(Types.AUTH_SET_USER, {
      ...(await axios.post(`${config.url.host}/token`, qs.stringify({
        username: payload.email,
        password: payload.password
      }))).data,
      isLogged: true
    });
  },
  doLogout: ({ commit }) => {
    commit(Types.AUTH_SET_USER, { username: '', email: '', isLogged: false });
  }
};
