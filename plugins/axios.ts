import axios from 'axios';
import Vue from 'vue';

export const fetch = axios.create({
    baseURL: process.env.baseUrl
});

const http = (Vue) => {
    Object.defineProperties(Vue.prototype, {
        $http: {
            get() {
                return fetch;
            }
        }
    });
};

Vue.use(http);