import LoginForm from '../components/LoginForm';
// import LinkElement from '../components/LinkElement'
// import routes from '../routes'
import Container from '../components/UI/Container'
import AppBar from '../components/AppBar'
import LogoPhoneBook from '../components/LogoPhoneBook'






export default function LoginPage() {
    return (
        <>
         <AppBar/>
         <Container>
            <LogoPhoneBook text='Login form'/>
            {/* <p>Please login</p> */}
            <LoginForm/>
            {/* <LinkElement link={routes.registration} styleName='Registration'/> */}
        </Container>
        </>
    )
}



