import PropTypes from "prop-types";
import { useCallback } from "react";
import {useDispatch}  from 'react-redux';
import сontactsActions from '../../redux/contacts/contacts-operations'
import { CgClose } from "react-icons/cg";
import Button from '@material-ui/core/Button';
import s from "./ContactsList.module.css";

function ContactListItem({ id, name, number}) {
  const dispatch = useDispatch();
  const onRemove = useCallback((id) => {
    dispatch(сontactsActions.removeItem(id))
  },[dispatch]);

    return (
        <li className={s.Item}>
        <span>{name}</span>
        <span className={s.Number}>{number}</span> 
        <Button  color='secondary' variant="contained"  type="button"  className={s.buttonDelete} onClick={() => onRemove(id)}>
          <CgClose/>
        </Button>
      </li>
      
    );
  }
  ContactListItem.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      })
    ),
  };


  export default ContactListItem