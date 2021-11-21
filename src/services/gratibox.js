import axios from 'axios';
const BASE_URL = 'http://localhost:4000';

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

export {
    signUp,
    logIn,
    getPlan,
};
