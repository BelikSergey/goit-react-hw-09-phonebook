import { useEffect } from "react";
import {useDispatch, useSelector}  from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { CSSTransition } from 'react-transition-group';
import styles from '../App.module.css';
import ContactsList from "../components/ContactsList";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import LogoPhoneBook from '../components/LogoPhoneBook';
import Container from '../components/UI/Container';
import actionsOperations from '../redux/contacts/contacts-operations'
import actionsSelectors from '../redux/contacts/contacts-selectors'
import AppBar from '../components/AppBar'







export default function  PhoneBookPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(actionsSelectors.AllContacts)

  useEffect(()=>{
    dispatch(actionsOperations.getItemsList())
  },[dispatch]);

    return (
      <>
          <>
           <AppBar/>
            <Container>
                <LogoPhoneBook text="PhoneBook"/>
                <ContactForm contacts={contacts} />
            </Container>
            <Container>
                <CSSTransition in={contacts.length > 1} 
                  timeout={250} 
                  classNames={styles}
                   unmountOnExit>
                   <div className={styles.SearchForm}>
                   <Filter/>
                  </div>
                </CSSTransition>
              <ContactsList contacts={contacts} />
            </Container>
           </>
         <ToastContainer position="top-left" autoClose={2000} />
      </>
    );
  }


// const mapStateToProps = (state) => ({
//   contacts: actionsSelectors.AllContacts(state),
//   // loading: actionsSelectors.isLoading(state)
// })
// const mapDispatchToProps = dispatch => ({
//   getItemsList: ()=> dispatch(actionsOperations.getItemsList())
// })

// export default connect(mapStateToProps,mapDispatchToProps)(PhoneBookPage);
