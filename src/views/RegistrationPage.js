import RegisterForm from '../components/RegisterForm';
import Container from '../components/UI/Container'
import AppBar from '../components/AppBar'
import LogoPhoneBook from '../components/LogoPhoneBook'




export default function RegistrationPage() {
    return (
        <>
        <AppBar/>
        <Container>
            <LogoPhoneBook text ='Registration form'/>
            <RegisterForm/>
        </Container>
        </>
    )
}
