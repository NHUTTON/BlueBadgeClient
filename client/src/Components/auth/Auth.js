import React, {useEffect, useState} from 'react';
import {Button, Row, Col, Container} from 'reactstrap';

import Login from  './Login';
import Register from  './Register';

const Auth = (props) => {
    const [currentUser, setCurrentUser] = useState('');
    const [clickLogin, setClickLogin] = useState(false);
    const [clickRegister, setClickRegister] = useState(false);

    const format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~1234567890]/;

    /*
        Need to add logic for displaying the modal
            a useState variable (boolean) to switch between on/off (when user pushes login/signup and the submit button)
            
            if not, modal will open on refresh, we only want it to fire when the login/register
    */

    const displayLogin = () => {
        setClickLogin(!clickLogin);
    }

    const displayRegister = () => {
        setClickRegister(!clickRegister);
    }

    return(
        <>
            <br/>
            <Container className='Auth'>
                <Row style={{float: "right"}}>
                    <Col>
                        <Button type='click' onClick={displayLogin}size='lg' style={{backgroundColor: "#BB86FC", color: "#292929", border: "none", borderRadius: "25px", marginRight: "2em"}}>LOGIN</Button>

                        <Button type='click' onClick={displayRegister} size='lg' style={{backgroundColor: "#BB86FC", color: "#292929", border: "none", borderRadius: "25px"}}>SIGN UP</Button>
                    </Col>
                    {clickLogin ? <Login url={props.url} updateToken={props.updateToken} format={format}/> : <></>}
                    {clickRegister ? <Register url={props.url} updateToken={props.updateToken} format={format}/> : <></>}
                </Row>
            </Container>
        </>
    )
}

export default Auth;