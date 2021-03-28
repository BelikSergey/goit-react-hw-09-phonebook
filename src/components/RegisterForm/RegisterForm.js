import  { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from '../ContactForm/ContactForm.module.css'
import registerOperations from '../../redux/auth/register-operations'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';





export default function RegisterForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleInputChangeName = useCallback((e) => {
    const { value } = e.currentTarget;
    setName(value)
  },[]);

  const [email, setEmail] = useState('');

  const handleInputChangeEmail = useCallback((e) => {
    const { value } = e.currentTarget;
    setEmail(value)
  },[]);

  const [password, setPassword] = useState('');

  const handleInputChangePassword = useCallback((e) => {
    const { value } = e.currentTarget;
    setPassword(value)
  },[]);


  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();

    if(name !== '' && email!=='' && password!==''){
      dispatch(registerOperations.register({name,email,password}));
    } else {
        toast.error('Empty fields!!! Please fill oll the fields', {
            autoClose: 2000,
            hideProgressBar: true,
            pauseOnHover: false,
            position: "top-right",
    })}
    reset();
  },[dispatch,name,email,password]);

  const reset = () => {
    setName('')
    setEmail('');
    setPassword('');
  };




  return (
    <div>
    <form className={styles.form} onSubmit={handleSubmitForm}>
        <TextField className={styles.FormInput}
          type="text"
          name="name"
          label="enter name"
          value={name}
          onChange={handleInputChangeName}
        />
        <TextField className={styles.FormInput}
          type="email"
          name="email"
          label="email"
          value={email}
          onChange={handleInputChangeEmail}
        />
        <TextField className={styles.FormInput}
          margin="normal"
          type="password"
          name="password"
          label="password"
          value={password}
          onChange={handleInputChangePassword}
        />
        <Button color='primary' variant='contained' className={styles.buttonForm} type="submit">
          Register
        </Button>
    </form>
    
</div>
  )
}





// class RegisterForm extends Component {
         
//     state = {
//         name: "",
//         email: "",
//         password:"",
//       };

      // handleInputChange = (e) => {
      //   const { name, value } = e.currentTarget;
      //   this.setState({ [name]: value });
      // };
      // handleSubmitForm = (e) => {
      //   e.preventDefault();
      //   const{name, email, password }= this.state;

      //   if(name !== '' && email!=='' && password!==''){
      //     this.props.onRegister(this.state);
      //   } else {
      //       toast.error('Empty fields!!! Please fill oll the fields', {
      //           autoClose: 2000,
      //           hideProgressBar: true,
      //           pauseOnHover: false,
      //           position: "top-right",
      //   })}
      //   this.reset();
      // };
      // reset = () => {
      //   this.setState({
      //       name: "",
      //       email: "",
      //       password:"",
      //   });
      // };


//     render() {
//         const { name, email, password } = this.state;
//         return (
            // <div>
            //     <form className={styles.form} onSubmit={this.handleSubmitForm}>
            //         <TextField className={styles.FormInput}
            //           type="text"
            //           name="name"
            //           label="enter name"
            //           value={name}
            //           onChange={this.handleInputChange}
            //         />
            //         <TextField className={styles.FormInput}
            //           type="email"
            //           name="email"
            //           label="email"
            //           value={email}
            //           onChange={this.handleInputChange}
            //         />
            //         <TextField className={styles.FormInput}
            //           margin="normal"
            //           type="password"
            //           name="password"
            //           label="password"
            //           value={password}
            //           onChange={this.handleInputChange}
            //         />
            //         <Button color='primary' variant='contained' className={styles.buttonForm} type="submit">
            //           Register
            //         </Button>
            //     </form>
                
            // </div>
//         )
//     }
// };

// const mapDispatchToProps ={
//   onRegister: registerOperations.register,
// }


// export default connect(null,mapDispatchToProps )(RegisterForm)  