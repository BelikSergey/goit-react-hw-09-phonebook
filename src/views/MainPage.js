import styles from './MainPage.module.css';
import AppBar from '../components/AppBar';
import Container from '../components/UI/Container'
import LogoPhoneBook from '../components/LogoPhoneBook'

function MainPage() {
    return (
        <>
        <AppBar/>
        <Container>
        <div className={styles.MainPage}>
            <h2 className={styles.Title}>Welcome to <LogoPhoneBook text='Phonebook'/></h2>
            <h3>If you want to continue, Please LogIn or Register</h3>
        </div>
        </Container>
        </>
    )
}


export default MainPage

