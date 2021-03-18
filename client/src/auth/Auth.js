import React, {useEffect, useState} from 'react';
import {Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Button} from 'reactstrap';
import './Auth.css';

import Login from  './Login';
import Register from  './Register';
import Logo from '../assets/Logo.png';

const Auth = (props) => {
    const [currentUser, setCurrentUser] = useState('');
    const [clickLogin, setClickLogin] = useState(false);
    const [clickRegister, setClickRegister] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [login, setLogin] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [test, setTest] = useState(true);
    // console.log(signUp);

    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;

    /*
        Need to add logic for displaying the modal
            a useState variable (boolean) to switch between on/off (when user pushes login/signup and the submit button)
            
            if not, modal will open on refresh, we only want it to fire when the login/register
    */

    // const displayLogin = () => {
    //     setClickLogin(!clickLogin);
    // }

    // const displayRegister = () => {
    //     setClickRegister(!clickRegister);
    // }

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const toggleLogin = () => setLogin(!login);

    const toggleSignUp = () => setSignUp(!signUp);

    return(
        <>
            <Navbar color='faded' light expand='md' className='Auth'>
                <NavbarBrand><img src={Logo} alt='logo' style={{height: "60px", marginLeft: "4em"}}/></NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <Button type='click' onClick={toggleLogin} size='lg' style={{backgroundColor: "#BB86FC", color: "#292929", border: "none", borderRadius: "25px", marginRight: "2em"}}>LOGIN</Button>
                        </NavItem>
                        <NavItem>
                            <Button type='click' onClick={toggleSignUp} size='lg' style={{backgroundColor: "#BB86FC", color: "#292929", border: "none", borderRadius: "25px"}}>SIGN UP</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
                    {toggleLogin ? <Login url={props.url} updateToken={props.updateToken} format={format} toggleLogin={toggleLogin} login={login}/> : <></>}
                    {toggleSignUp ? <Register url={props.url} updateToken={props.updateToken} format={format} toggleSignUp={toggleSignUp} signUp={signUp} test={test}/> : <></>}
        </>
    )
}

export default Auth;