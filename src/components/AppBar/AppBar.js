import {useCallback} from 'react'
import styles from './AppBar.module.css'
import LinkElement from '../LinkElement'
import routes from '../../routes'
import selectors from '../../redux/auth/register-selections';
import operations from '../../redux/auth/register-operations';
import { ImExit } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux'
import defaultAvatar from './avatar-2.png'
import Button from '@material-ui/core/Button';


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

function UserMenu () {
    const dispatch = useDispatch();
    const avatar = defaultAvatar;
    const email = useSelector(selectors.getEmailUser);
    const onLogOut= useCallback(()=>{
            dispatch(operations.logout()) 
        },[dispatch])

    return (
        <div className={styles.NavRegisterLogin}>
            <img src={avatar} alt="avatar" width="34"/>
            <span className={styles.Email}>{email}</span>
           <Button color='secondary' variant="contained"  type="button" className={styles.Button} onClick={onLogOut} ><ImExit/></Button>
        </div>
    )
} 

function AppBar() {
    const IsAuthenticated = useSelector(selectors.getIsAuthenticated)
    return (
        <header className={styles.header}>
            {IsAuthenticated ? <UserMenu/>: <NavRegisterLogin/>}
        </header>
    )
}

// const mapStateToProps = state => ({
//     IsAuthenticated: selectors.getIsAuthenticated(state),
//     email: selectors.getEmailUser(state),
//     avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//     onLogOut: operations.logout
// }


export default AppBar;
