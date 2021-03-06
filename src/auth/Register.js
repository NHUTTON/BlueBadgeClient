import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../helpers/environment'

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isOpen, setIsOpen] = useState(true);

    let handleSubmit = (event) => {
        event.preventDefault();
        if (password === "" || username.length < 4 || !username.match(props.format)){
            alert('Your username and password need to meet the requirements.')
        } else {
            props.clearToken();

            let newURL = `${APIURL}/user/register`;

            fetch(newURL, {
                method:'POST',
                body: JSON.stringify({user: {username: username, password: password}}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
                .then((res) => res.json())
                .then((data) => {
                    alert(data.message)
                    props.updateToken(data.sessionToken);
                });
        }
    }

    //this conditional checks for special characters is in the username and password
    const modalToggle = () => {
        if (username.match(props.format) && username.length > 4 && password.length > 5) {
            props.toggleSignUpOff();
        } else {
            console.log("Error: username or password is incorrect")
        }
    }

    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px', color: "white" }} onClick={props.toggleSignUpOff}>&times;</button>;

    return(
        <Modal isOpen={true} toggle={props.toggleSignUp} external={externalCloseBtn} className='Modal'>
            <ModalHeader style={{color: "black"}}>Sign Up</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='username'>Username:</Label>
                        <Input name='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <p><i>Username must be at least 4 characters and include one (1) number or special character.</i></p>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='password'>Password:</Label>
                        <Input name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <p><i>Password must be 5 or more characters.</i></p>
                    </FormGroup>
                    <Button type='submit'>Create Account</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default Register;