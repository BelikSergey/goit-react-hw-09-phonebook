import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../ContactForm/ContactForm.module.css'
import registerOperations from '../../redux/auth/register-operations'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';



class LoginForm extends Component {
                // static propTypes = {
                //     prop: PropTypes
                // }
    state = {
       email: "",
       password:"",
      };

      handleInputChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
      };
      handleSubmitForm = (e) => {
        e.preventDefault();
        // console.log('есть сабмит формы');
        const{ email, password}= this.state;

        if(email!=='' && password !== '' ){
            this.props.onLogin(this.state)
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
          email: "",
          password:"",
        });
      };


    render() {
        const { email, password} = this.state;
        return (
            <div>
                <form className={styles.form} onSubmit={this.handleSubmitForm}>
                 
                    {/* <h3>email</h3> */}
                    <TextField 
                      // margin="normal"
                      // id="standard-basic"
                      label="email" 
                      // variant="filled"
                      className={styles.FormInput}
                      type="email"
                      name="email"
                      // placeholder="bla-bla-bla@mail.com"
                      value={email}
                      onChange={this.handleInputChange}
                    />
                    {/* <h3>password</h3> */}
                    {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                    <TextField className={styles.FormInput}
                      margin="normal"
                      // id="standard-basic"
                      // variant="filled"
                      label="password" 
                      type="password"
                      name="password"
                      // placeholder="******"
                      value={password}
                      onChange={this.handleInputChange}
                    />
                   
                    <Button color='primary' variant='contained' className={styles.buttonForm} type="submit">
                      Login
                    </Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = {
  onLogin: registerOperations.login,
} 

export default connect(null, mapDispatchToProps)(LoginForm)