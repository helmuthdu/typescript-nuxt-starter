import { MutationTree } from 'vuex';
import { State } from '~/store/modules/auth/state';
import { Types } from '~/store/modules/auth/types';

export const mutations: MutationTree<State> = {
  [Types.AUTH_SET_USER]: (state: State, payload: State) => {
    state.username = payload.username;
    state.email = payload.email;
    state.isLogged = payload.isLogged;
  }
};
