import axios from "axios";
import { BASE_URL } from "./BASE__URL";
import authAction from './register-actions'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


axios.defaults.baseURL = BASE_URL;

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset () {
        axios.defaults.headers.common.Authorization = ``;
    }

};

const register = credentials =>async  dispatch => {
    dispatch(authAction.registrationRequest());

    try {
       const response = await axios.post('/users/signup', credentials );
       token.set(response.data.token);
       dispatch(authAction.registrationSuccess(response.data));
    } catch (error) {
        dispatch(authAction.registrationError(error.message));
        toast.error(error.message, {
            autoClose: 2500,
            hideProgressBar: true,
            pauseOnHover: false,
            position: "top-right",
        })

    }
};

const login = credentials =>async dispatch => {
    dispatch(authAction.loginRequest());

    try {
       const response = await axios.post('/users/login', credentials );
       token.set(response.data.token);
       dispatch(authAction.loginSuccess(response.data));
    } catch (error) {
        dispatch(authAction.loginError(error.message));
        toast.error(error.message, {
            autoClose: 2500,
            hideProgressBar: true,
            pauseOnHover: false,
            position: "top-right",
        })
    }

};

const logout = () => async dispatch => {          
    dispatch(authAction.loginRequest());

    try {
      await axios.post('/users/logout');
      token.unset();
       dispatch(authAction.logoutSuccess());
    } catch (error) {
        dispatch(authAction.logoutError(error.message));
        toast.error(error.message, {
            autoClose: 2500,
            hideProgressBar: true,
            pauseOnHover: false,
            position: "top-right",
        })
    }

};

const getCurrentUser = () => async (dispatch, getState) => {
    
    const {
     auth: {token: persistedToken},
 } = getState();
 if (!persistedToken){
     return
 } 

 token.set(persistedToken);
 dispatch(authAction.getCurrentUserRequest());
 try {
    const response = await axios.get('/users/current')

    dispatch(authAction.getCurrentUserSuccess(response.data))
 } catch (error) {
     dispatch(authAction.getCurrentUserError(error.message));
     toast.error(error.message, {
        autoClose: 2500,
        hideProgressBar: true,
        pauseOnHover: false,
        position: "top-right",
    })
 }




};

// eslint-disable-next-line import/no-anonymous-default-export
export default {register, login, logout, getCurrentUser }