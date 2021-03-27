import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import registerActions from '../auth/register-actions'

const initialUserState = {name:null, email:null};

const user = createReducer(initialUserState,{
    [registerActions.registrationSuccess]: (_, {payload})=> payload.user,
    [registerActions.loginSuccess]: (_, {payload})=> payload.user,
    [registerActions.logoutSuccess]: ()=> initialUserState,
    [registerActions.getCurrentUserSuccess]:(_, {payload})=> payload,
});

const token = createReducer(null, {
    [registerActions.registrationSuccess]: (_, {payload})=> payload.token,
    [registerActions.loginSuccess]: (_, {payload})=> payload.token,
    [registerActions.logoutSuccess]:()=> null,
});

const error = createReducer(null,{
    [registerActions.registrationError]:(_, {payload})=> payload,
    [registerActions.loginError]:(_, {payload})=> payload,
    [registerActions.logoutError]:(_, {payload})=> payload,
    [registerActions.getCurrentUserError]:(_, {payload})=> payload
});
const isAuthenticated = createReducer(false, {
    [registerActions.registrationSuccess]: ()=>true,
    [registerActions.loginSuccess]:  ()=>true,
    [registerActions.getCurrentUserSuccess]:  ()=>true,
    [registerActions.registrationError]: ()=> false,
    [registerActions.loginError]: ()=> false,
    [registerActions.getCurrentUserError]: ()=> false,
    [registerActions.logoutSuccess]: ()=> false,
})

export default combineReducers({
    user,
    isAuthenticated, 
    token,
    error,
}); 