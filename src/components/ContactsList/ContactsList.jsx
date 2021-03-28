import PropTypes from "prop-types";
import {useSelector}  from 'react-redux';
// import сontactsActions from '../../redux/contacts/contacts-operations'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from "./ContactsList.module.css";
import ContactListItem from './ContactListItem'
import сontactsSelectors from '../../redux/contacts/contacts-selectors'


function  ContactsList() {
  const contacts = useSelector(сontactsSelectors.visibleFilteredContacts)
  if (contacts.length === 0) return null;
  
  return (
      <div >
      <TransitionGroup component="ul" className={s.UlList}>
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames={s}>
          <ContactListItem  {...contact}/>
          </CSSTransition>
      ))}
    </TransitionGroup>
      </div> 
    
  );
}

ContactsList.propTypes = {
  onRemove: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

// const mapStateToProps = (state) => ({
//   contacts: сontactsSelectors.visibleFilteredContacts(state),
// })

// const mapDispatchToProps = dispatch => ({
//   onRemove: (id)=> dispatch(сontactsActions.removeItem(id))
// })


export default ContactsList;
