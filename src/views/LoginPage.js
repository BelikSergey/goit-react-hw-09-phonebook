import LoginForm from '../components/LoginForm';
import Container from '../components/UI/Container'
import AppBar from '../components/AppBar'
import LogoPhoneBook from '../components/LogoPhoneBook'






export default function LoginPage() {
    return (
        <>
         <AppBar/>
         <Container>
            <LogoPhoneBook text='Login form'/>
            <LoginForm/>
        </Container>
        </>
    )
}



