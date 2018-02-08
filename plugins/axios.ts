import axios from 'axios';
import Vue from 'vue';

export const fetch = axios.create({
    baseURL: process.env.baseUrl
});

const requestSuccess = (req) => {
    return req;
};

const requestError = (err) => {
    return Promise.reject(err);
};

const responseSuccess = (res) => {
    return Promise.resolve(res);
};

const responseError = (err) => {
    if (err.request.status === 401 || err.request.status === 403) {
        console.log('UNAUTHORIZED');
    }

    return Promise.reject(err);
};

fetch.interceptors.request.use(requestSuccess, requestError);
fetch.interceptors.response.use(responseSuccess, responseError);

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