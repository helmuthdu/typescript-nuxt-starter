import { RootState } from 'store';
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex';

export const types = {};

export interface State {
}

export const state = (): State => ({});

export const getters: GetterTree<State, RootState> = {};

export interface Actions<S, R> extends ActionTree<S, R> {
    nuxtServerInit (context: ActionContext<S, R>): void
}

export const actions: Actions<State, RootState> = {
    async nuxtServerInit ({ commit }) {
        // example:
        // const response = await axios.get('/random-data.json');
        // commit(`${auth.namespace}/${auth.Types.AUTH_SET_USER}`, response.data, { root: true });
    }
};

export const mutations: MutationTree<State> = {};