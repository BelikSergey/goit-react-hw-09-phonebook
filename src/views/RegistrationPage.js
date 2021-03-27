import RegisterForm from '../components/RegisterForm';
// import LinkElement from '../components/LinkElement'
// import routes from '../routes';
import Container from '../components/UI/Container'
import AppBar from '../components/AppBar'
import LogoPhoneBook from '../components/LogoPhoneBook'




export default function RegistrationPage() {
    return (
        <>
        <AppBar/>
        <Container>
            <LogoPhoneBook text ='Registration form'/>
            {/* <p>Please fill oll the fields</p> */}
            <RegisterForm/>
            {/* <LinkElement link={routes.login} styleName='Login'/> */}
        </Container>
        </>
    )
}


















// import { Component, lazy } from "react";
// import { Route, Switch, Redirect } from 'react-router-dom';
// import {connect}  from 'react-redux';
// import { ToastContainer } from 'react-toastify';
// import { CSSTransition } from 'react-transition-group';
// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// // import styles from './App.module.css';
// import ContactsList from "./components/ContactsList";
// import ContactForm from "./components/ContactForm";
// import Filter from "./components/Filter";
// import LogoPhoneBook from './components/LogoPhoneBook';
// import Container from './UI/Container/Container';
// import actionsOperations from './redux/contacts/contacts-operations'
// import actionsSelectors from './redux/contacts/contacts-selectors'
// import LinkElement from './components/LinkElement'
// import routes from './routes'
// // import PhoneBookPage from './views/PhoneBookPage'


// // const PhoneBookPage =lazy(()=>
// // import('./views/PhoneBookPage' /* webpackChunkName: "phone-book-page" */),
// // );
// // const Login =lazy(()=>
// // import('./views/Login' /* webpackChunkName: "login-page" */),
// // );
// // const Registration =lazy(()=>
// // import('./views/Registration' /* webpackChunkName: "registration-page" */),
// // );


// class App extends Component {

//  componentDidMount(){
//    this.props.getItemsList();
//  }  


//   render() {
//     const {loading,contacts} = this.props;
//     return (
//       <>
//           {loading === true && (
//             <Loader
//             type="ThreeDots"
//             color="#00BFFF"
//             height={80}
//             width={80}
//             />
//           ) }
//           {loading === false && (
//            <>
//             <Container>
//                 <LinkElement link={routes.registration} styleName='Registration'/>
//                 <LinkElement link={routes.login} styleName='Login'/>
//                 <LogoPhoneBook/>
//                 <ContactForm/>
//             </Container>
//             <Container>
//                 <CSSTransition in={contacts.length > 1} 
//                   timeout={250} 
//                   classNames={styles}
//                    unmountOnExit>
//                    <div className={styles.SearchForm}>
//                    <p>Find contacts by name</p>
//                    <Filter/>
//                   </div>
//                 </CSSTransition>
//               <ContactsList contacts={contacts} />
//             </Container>
//            </>
//           )}
//          <ToastContainer position="top-left" autoClose={2000} />
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   contacts: actionsSelectors.AllContacts(state),
//   loading: actionsSelectors.isLoading(state)
// })
// const mapDispatchToProps = dispatch => ({
//   getItemsList: ()=> dispatch(actionsOperations.getItemsList())
// })

// export default connect(mapStateToProps,mapDispatchToProps)(App);
