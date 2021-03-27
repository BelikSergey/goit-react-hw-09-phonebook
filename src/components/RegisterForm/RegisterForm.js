import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../ContactForm/ContactForm.module.css'
import registerOperations from '../../redux/auth/register-operations'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class RegisterForm extends Component {
         
    state = {
        name: "",
        email: "",
        password:"",
      };

      // componentDidUpdate (prevstate, nextState) {
      //   const{name, email, password, isActive }= this.state;
      //   if(name !== '' && email!=='' && password!=='' && isActive!==true){
      //     this.setState({isActive: true});
      //     // console.log(this.state.isActive);
      //   }
        
      // }

      handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
      };
      handleSubmitForm = (e) => {
        e.preventDefault();
        // console.log('есть сабмит формы');
        const{name, email, password }= this.state;

        if(name !== '' && email!=='' && password!==''){
          this.props.onRegister(this.state);
          // this.setState({isActive: true})
        } else {
            toast.error('Empty fields!!! Please fill oll the fields', {
                autoClose: 2000,
                hideProgressBar: true,
                pauseOnHover: false,
                position: "top-right",
        })}
        this.reset();
      };
      reset = () => {
        this.setState({
            name: "",
            email: "",
            password:"",
        });
      };


    render() {
        const { name, email, password } = this.state;
        return (
            <div>
                <form className={styles.form} onSubmit={this.handleSubmitForm}>
                    {/* <h3>Name</h3> */}
                    <TextField className={styles.FormInput}
                    //  margin="normal"
                      // id="standard-basic1"
                      type="text"
                      name="name"
                      label="enter name"
                      value={name}
                      onChange={this.handleInputChange}
                    />
                    {/* <h3>email</h3> */}
                    <TextField className={styles.FormInput}
                      // id="standard-basic"
                      type="email"
                      name="email"
                      label="email"
                      value={email}
                      onChange={this.handleInputChange}
                    />
                    {/* <h3>password</h3> */}
                    <TextField className={styles.FormInput}
                      margin="normal"
                      // id="standard-basic"
                      type="password"
                      name="password"
                      label="password"
                      value={password}
                      onChange={this.handleInputChange}
                    />
                    <Button color='primary' variant='contained' className={styles.buttonForm} type="submit">
                      Register
                    </Button>
                </form>
                
            </div>
        )
    }
};

const mapDispatchToProps ={
  onRegister: registerOperations.register,
}


export default connect(null,mapDispatchToProps )(RegisterForm)  