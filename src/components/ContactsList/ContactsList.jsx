import PropTypes from "prop-types";
import {connect}  from 'react-redux';
import сontactsActions from '../../redux/contacts/contacts-operations'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from "./ContactsList.module.css";
import ContactListItem from './ContactListItem'
import сontactsSelectors from '../../redux/contacts/contacts-selectors'


function  ContactsList({ contacts, onRemove}) {
  if (contacts.length === 0) return null;
  // console.log(contacts);
  return (
      <div >
      <TransitionGroup component="ul" className={s.UlList}>
      {/* <h3>Contacts</h3> */}
      {contacts.map((contact) => (
        <CSSTransition key={contact.id} timeout={250} classNames={s}>
          <ContactListItem  {...contact} onRemove={onRemove}/>
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

const mapStateToProps = (state) => ({
  contacts: сontactsSelectors.visibleFilteredContacts(state),
})

const mapDispatchToProps = dispatch => ({
  onRemove: (id)=> dispatch(сontactsActions.removeItem(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
