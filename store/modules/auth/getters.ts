import { GetterTree } from 'vuex';
import { RootState } from '~/store/index';
import { State } from '~/store/modules/auth/state';

export const getters: GetterTree<State, RootState> = {
  isLogged: state => {
    return state.isLogged;
  }
};
