import { Suspense, lazy, useEffect } from "react";
import { Switch, Redirect } from 'react-router-dom';
import {useDispatch}  from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import registerOps from './redux/auth/register-operations'
import routes from './routes';
import MainPage from './views/MainPage'
import PrivetRoute from './components/PrivetRout'
import PublicRoute from './components/PublicRoute'



const PhoneBookPage =lazy(()=>
import('./views/PhoneBookPage' /* webpackChunkName: "phone-book-page" */),
);
const LoginPage =lazy(()=>
import('./views/LoginPage' /* webpackChunkName: "login-page" */),
);
const RegistrationPage =lazy(()=>
import('./views/RegistrationPage' /* webpackChunkName: "registration-page" */),
);



export default function App () {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(registerOps.getCurrentUser());
  },[dispatch])

  return (
      <>
      <Suspense
          fallback={
            <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={200}
            width={200}
            />
          }
      >
          <Switch>
              <PublicRoute path={routes.main} exact component={MainPage} restricted redirectTo="/contacts"/>
              <PublicRoute path={routes.login} component={LoginPage} restricted redirectTo="/contacts"/>
              <PrivetRoute path={routes.phoneBook} component={PhoneBookPage} redirectTo="/"/>
              <PublicRoute
                  path={routes.registration}
                  component={RegistrationPage}
                  restricted
                  redirectTo="/contacts"  
              />
              <Redirect to="/"/>
          </Switch>
      </Suspense>
      <ToastContainer position="top-left" autoClose={2000} />
    </>
    )
  }






// const App =() => {




 
//     // const {loading,contacts} = this.props;
//     return (
//     //   



//       // <>
//       //     {loading === true && (
//       //       <Loader
//       //       type="ThreeDots"
//       //       color="#00BFFF"
//       //       height={80}
//       //       width={80}
//       //       />
//       //     ) }
//       //     {loading === false && (
//       //      <>
//       //       <Container>
//       //           <LinkElement link={routes.registration} styleName='Registration'/>
//       //           <LinkElement link={routes.login} styleName='Login'/>
//       //           <LogoPhoneBook/>
//       //           <ContactForm/>
//       //       </Container>
//       //       <Container>
//       //           <CSSTransition in={contacts.length > 1} 
//       //             timeout={250} 
//       //             classNames={styles}
//       //              unmountOnExit>
//       //              <div className={styles.SearchForm}>
//       //              <p>Find contacts by name</p>
//       //              <Filter/>
//       //             </div>
//       //           </CSSTransition>
//       //         <ContactsList contacts={contacts} />
//       //       </Container>
//       //      </>
//       //     )}
//       //    <ToastContainer position="top-left" autoClose={2000} />
//       // </>
//     );
  // }


// const mapStateToProps = (state) => ({
//   contacts: actionsSelectors.AllContacts(state),
//   // loading: actionsSelectors.isLoading(state)
// // })
// const mapDispatchToProps = dispatch => ({
//   getCurrentUser: ()=> dispatch(registerOps.getCurrentUser()),
//   getItemsList:() => dispatch(contactsOps.getItemsList()),

// })

// export default connect(null, mapDispatchToProps)(App);
// // export default connect()(App)