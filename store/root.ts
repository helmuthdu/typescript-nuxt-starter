import { RootState } from 'store';
import { ActionContext, ActionTree, GetterTree, MutationTree } from 'vuex';
import axios from '~/plugins/axios';
import * as people from './modules/people';

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
        const response = await axios.get('/random-data.json');
        const staticPeople = response.data.slice(0, 10);
        commit(`${people.name}/${people.types.SET}`, staticPeople, { root: true });
    }
};

export const mutations: MutationTree<State> = {};