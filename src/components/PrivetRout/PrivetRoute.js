import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import registerSelectors from '../../redux/auth/register-selections'
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


const PrivetRout = ({
    component: Component,
    redirectTo,
    props,
    ...routeProps
   
}) => {
   const token = useSelector(registerSelectors.getToken);
   const isAuthenticated = useSelector(registerSelectors.getIsAuthenticated)
    if(token && !isAuthenticated) return <Loader type="ThreeDots"
    color="#00BFFF"
    height={200}
    width={200}/>;
    if(isAuthenticated && token) return <Route {...routeProps}
    render={props =><Component {...props}/>}/>;
    return <Redirect to={redirectTo}/>;
    

} 
 
// const mapStateToProps= (state)=>({
//     isAuthenticated: registerSelectors.getIsAuthenticated(state),
//     token: registerSelectors.getToken(state)
// })

export default PrivetRout