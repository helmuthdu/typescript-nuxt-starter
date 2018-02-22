import { RootState } from '@/store/index';
import { State } from '@/store/modules/auth/state';
import { GetterTree } from 'vuex';

export const getters: GetterTree<State, RootState> = {
  isLogged: (state) => {
    return state.isLogged;
  }
};
