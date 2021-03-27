// import PropTypes from 'prop-types'
// import LinkElement from '../components/LinkElement';
// import routes from '../routes';
import styles from './MainPage.module.css';
import AppBar from '../components/AppBar';
import Container from '../components/UI/Container'
import LogoPhoneBook from '../components/LogoPhoneBook'

// import 

function MainPage() {
    return (
        <>
        <AppBar/>
        <Container>
        <div className={styles.MainPage}>
            <h2 className={styles.Title}>Welcome to <LogoPhoneBook text='Phonebook'/></h2>
            <h3>If you want to continue, Please LogIn or Register</h3>
            {/* <LinkElement link={routes.registration} styleName='Registration'/>
            <LinkElement link={routes.login} styleName='Login'/> */}
        </div>
        </Container>
        </>
    )
}


export default MainPage

