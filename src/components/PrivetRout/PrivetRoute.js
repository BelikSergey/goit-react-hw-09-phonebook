// import { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import registerSelectors from '../../redux/auth/register-selections'


const PrivetRout = ({
    component: Component,
    token,
    isAuthenticated,
    redirectTo,
    ...routeProps
}) => (
    <Route {...routeProps}
    render={props => 
        isAuthenticated && token ? <Component {...props}/> : <Redirect to={redirectTo}/> }/>
);
 
const mapStateToProps= (state)=>({
    isAuthenticated: registerSelectors.getIsAuthenticated(state),
    token: registerSelectors.getToken(state),

})

export default connect(mapStateToProps, null)(PrivetRout)