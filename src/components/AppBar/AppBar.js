import React from 'react'
import styles from './AppBar.module.css'
import LinkElement from '../LinkElement'
import routes from '../../routes'
import selectors from '../../redux/auth/register-selections';
import operations from '../../redux/auth/register-operations';
import { ImExit } from "react-icons/im";
import { connect } from 'react-redux'
import defaultAvatar from './avatar-2.png'
import Button from '@material-ui/core/Button';


// console.log(selectors.getIsAuthenticated);

function NavRegisterLogin () {
    return (
        <ul className={styles.NavRegisterLogin}>
            <li>
            <Button color='primary' variant='contained' className={styles.ListItem}>
            <LinkElement link={routes.registration} styleName='Registration'/>
            </Button>
            </li>
            <li>
            <Button color='primary' variant='contained' className={styles.ListItem}>
            <LinkElement link={routes.login} styleName='Login'/>  
            </Button>
            </li>
        </ul>
    )
}

function UserMenu ({avatar, email, onLogOut }) {
    return (
        <div className={styles.NavRegisterLogin}>
            <img src={avatar} alt="avatar" width="34"/>
            <span className={styles.Email}>{email}</span>
           <Button color='secondary' variant="contained"  type="button" className={styles.Button} onClick={onLogOut} ><ImExit/></Button>
        </div>
    )
} 

function AppBar({IsAuthenticated, email, avatar, onLogOut }) {
    return (
        <header className={styles.header}>
            {IsAuthenticated ? <UserMenu email={email} avatar={avatar} onLogOut={onLogOut}/>: <NavRegisterLogin/>}
            {/* <LinkElement link={routes.phoneBook}  styleName='contacts'/> */}
        </header>
    )
}

const mapStateToProps = state => ({
    IsAuthenticated: selectors.getIsAuthenticated(state),
    email: selectors.getEmailUser(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogOut: operations.logout
}


export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
