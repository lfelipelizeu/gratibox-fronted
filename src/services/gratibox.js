import axios from 'axios';
const BASE_URL = 'https://gratiboxapp.herokuapp.com';

function headerConfig(token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
}

function signUp(body) {
    return axios.post(`${BASE_URL}/signup`, body);
}

function logIn(body) {
    return axios.post(`${BASE_URL}/login`, body);
}

function getPlan(token) {
    const config = headerConfig(token);

    return axios.get(`${BASE_URL}/plan`, config);
}

function getStates() {
    return axios.get(`${BASE_URL}/states`);
}

function subscribe(token, body) {
    const config = headerConfig(token);

    return axios.post(`${BASE_URL}/subscribe`, body, config);
}

export {
    signUp,
    logIn,
    getPlan,
    getStates,
    subscribe,
};
