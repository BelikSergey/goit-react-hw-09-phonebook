import { createAction } from '@reduxjs/toolkit';

const registrationRequest= createAction('contacts/registrationRequest');
const registrationSuccess= createAction('contacts/registrationSuccess');
const registrationError= createAction('contacts/registrationError');

const loginRequest= createAction('contacts/loginRequest');
const loginSuccess= createAction('contacts/loginSuccess');
const loginError= createAction('contacts/loginError');

const logoutRequest= createAction('contacts/logoutRequest');
const logoutSuccess= createAction('contacts/logoutSuccess');
const logoutError= createAction('contacts/logoutError');

const getCurrentUserRequest= createAction('contacts/getCurrentUserRequest');
const getCurrentUserSuccess= createAction('contacts/getCurrentUserSuccess');
const getCurrentUserError= createAction('contacts/getCurrentUserError');

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    registrationRequest,
    registrationSuccess,
    registrationError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError
}