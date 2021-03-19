import React, {useEffect, useState} from 'react';
import {Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Button} from 'reactstrap';

import Login from  './Login';
import Register from  './Register';
import Logo from '../assets/Logo.png';

const Auth = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(false);
    

    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const toggleLogin = () => setLogin(true);
    const toggleLoginOff = () => setLogin(false);

    const toggleSignUp = () => setSignUp(true);
    const toggleSignUpOff = () => setSignUp(false);

    return(
        <>
     <Navbar color='faded' light expand='md' className='Auth' style={{marginTop: "1em"}}>
                <NavbarBrand><img src={Logo} alt='logo' style={{height: "80px", marginLeft: "4em"}}/></NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar style={{marginRight: "4em"}}>
                        <NavItem>
                            <Button type='click' onClick={toggleLogin} size='lg' style={{backgroundColor: "#BB86FC", color: "#292929", border: "none", borderRadius: "25px", marginRight: "2em"}}>LOGIN</Button>
                        </NavItem>
                        <NavItem>
                            <Button type='click' onClick={toggleSignUp} size='lg' style={{backgroundColor: "#BB86FC", color: "#292929", border: "none", borderRadius: "25px"}}>SIGN UP</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
                    { // multiple props being passed here but ill highlight one, we are passing the toggleLoginOff function  at the top of the page, as a prop.
                    login 
                        ? <Login clearToken={props.clearToken} url={props.url} updateToken={props.updateToken} format={format} toggleLogin={toggleLogin} toggleLoginOff={toggleLoginOff} login={login}/> 
                        : <></>
                    }

                    {signUp 
                    ? <Register clearToken={props.clearToken} url={props.url} updateToken={props.updateToken} format={format} toggleSignUp={toggleSignUp} toggleSignUpOff={toggleSignUpOff} signUp={signUp} format={format}/> 
                    : <></>}
        </>
    )
}

export default Auth;