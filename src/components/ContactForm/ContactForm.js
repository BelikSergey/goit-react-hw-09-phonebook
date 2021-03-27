import React, { Component } from "react";
import {connect}  from 'react-redux';
import сontactsOperations from '../../redux/contacts/contacts-operations'
import Button from '@material-ui/core/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./ContactForm.module.css";
import сontactsSelectors from '../../redux/contacts/contacts-selectors'
// import FilledInput from '@material-ui/core/FilledInput';
import TextField from '@material-ui/core/TextField';


class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log('есть сабмит формы');
    const{name,number}= this.state;
    const isValidForm = this.validateForm(name, number);
    if (isValidForm) {
      // console.log('форма прошла валидацию и отправила item');
      // this.props.onSubmit({ id: nanoid(), name, number });
      this.props.onSubmit({ name, number });
    } else return;
    this.reset();
  };
  handleUniceContact = (name) => {
      // const { contacts } = this.state;
      const isContactThere = this.props.contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
      if (isContactThere) {
        toast.error('Contact is exist', {
          autoClose: 2000,
          hideProgressBar: true,
          pauseOnHover: false,
          position: "top-right",
      })
        return;
      }
      return !isContactThere;
    };
  validateForm = (name, number) => {
    if (!name || !number) {
      toast.warn('Empty fields!!! Please fill',{
        autoClose:2000,
        hideProgressBar: true,
        pauseOnHover: false,
        position: "top-right",
      });
      return false;
    }
    return this.handleUniceContact(name);
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmitForm}>
        {/* <h3>Name</h3> */}
        <TextField className={s.FormInput}
        // margin="normal"
          // id="standard-basic"
          label="Name"
          type="text"
          name="name"
          // placeholder="Enter name"
          value={name}
          onChange={this.handleInputChange}
        />

        {/* <h3>Number</h3> */}
        <TextField className={s.FormInput}
          margin="normal"
          // id="standard-basic"
          label="Number 345-67-89"
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          // placeholder="345-67-89"
          value={number}
          onChange={this.handleInputChange}
        />
        <Button margin='normal' type="submit" className={s.buttonForm} color='primary' variant='contained'>
        {/* <button className={s.buttonForm} type="submit"> */}
          Add contact
          </Button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  contacts: сontactsSelectors.AllContacts(state),
})


const mapDispatchToProps = dispatch =>({
  onSubmit: (item)=> dispatch(сontactsOperations.addItem(item))
})

 export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)