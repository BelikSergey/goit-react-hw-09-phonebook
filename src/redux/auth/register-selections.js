const getIsAuthenticated = state => state.auth.isAuthenticated;
const getEmailUser = state => state.auth.user.email;
const getToken = state=> state.auth.token;
const getError = state => state.auth.error


//  console.log(getError);
 // eslint-disable-next-line import/no-anonymous-default-export
 export default {
    getIsAuthenticated,
    getEmailUser,
    getToken,
    getError
}