import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import registerSelectors from '../../redux/auth/register-selections'


const PublicRoute = ({
    component: Component,
    isAuthenticated,
    token,
    redirectTo,
    ...routeProps
  }) => (
    <Route
      {...routeProps}
      render={props =>
        isAuthenticated && routeProps.restricted && token ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
 
const mapStateToProps= (state)=>({
    isAuthenticated: registerSelectors.getIsAuthenticated(state),
    token: registerSelectors.getToken(state),
})

export default connect(mapStateToProps, null)(PublicRoute)