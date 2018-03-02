import { RootState } from '~/store';
import { State } from '~/store/modules/auth/state';
import { GetterTree } from 'vuex';

export const getters: GetterTree<State, RootState> = {
  isLogged: (state: State) => {
    return state.isLogged;
  }
};
